module.exports = async function (job) {
    try {
        console.log(job.data);
    } catch (e) {
        console.error(e);
    }
}
