const { getUserId, validToken } = require('../utils');

/*
  Test query
  @return {String} 
*/
function info() {
	return 'Welcome to Quality Hub';
}

/*
  @param {ID} id: id of user

  Get info of a user by their ID

  @return {Object}  - Type User with specified ID
*/
async function user(parents, args, context, info) {
	return await context.prisma.user({ id: args.id });
}

/*
  Get info of all users

  @return {[Object]}  - All users
*/
async function users(parent, args, context, info) {
	// await checkAdmin(context);
	let { keywords } = args;
	let where;
	if (keywords) {
		where = { OR: [] };
		keywords = keywords.toLowerCase();
		let split = splitAndTrimTags(keywords);
		split.forEach(word => {
			where.OR.push({ fn_lc_starts_with: word.name });
			where.OR.push({ ln_lc_starts_with: word.name });
			where.OR.push({ city_lc_starts_with: word.name });
			where.OR.push({ state_lc_starts_with: word.name });
		});
	}
	return await context.prisma.users({ where });
}

/*
  Get info of self, or info or user stored in token

  @return {Object}  - Type User 
*/
async function me(_parent, _args, context) {
	return await context.prisma.user({ id: getUserId(context) });
}

async function reviewByJobId(parent, args, { prisma }) {
	return await prisma.review({
		where: { job_id: args.job_id }
	})
}

async function reviewsByCoach(parent, args, { prisma }) {
	return await prisma.reviews({
		where: { coach: args.coach }
	})
}

async function reviewsBySeeker(parent, args, { prisma }) {
	return await prisma.reviews({
		where: { coach: args.seeker }
	})
}

async function reviewsByMicroservice(parent, args, { prisma }) {
	console.log(`reviewsByMicroservice`, args)

	// Prisma does not allow filtering by enum, so will have to return all reviews and manually filter
	const allReviews = await prisma.reviews()
	console.log(`reviewsByMicroservice, allReviews`, allReviews)
	const filteredReviews = allReviews.filter(review => review.microservice === args.microservice)

	console.log(`reviewsByMicroservice, filteredReviews`, filteredReviews)
	return filteredReviews
}

async function resumeQReviews(parent, args, { prisma }) {
	return await prisma.reviews({
		where: { microservice: 'RESUMEQ' }
	})
}

async function interviewQReviews(parent, args, { prisma }) {
	return await prisma.reviews({
		where: { microservice: 'INTERVIEWQ' }
	})
}


function splitAndTrimTags(tagString) {
	const tagArray = tagString.split(',');
	return tagArray.map(tag => {
		return { name: tag.trim() };
	});
}

function checkToken(parent, args, context, info) {
	return validToken(context)
}

module.exports = {
	user,
	users,
	info,
	me,
	checkToken,
	reviewByJobId,
	reviewsByMicroservice,
	resumeQReviews,
	interviewQReviews,
	reviewsByCoach,
	reviewsBySeeker,
};
