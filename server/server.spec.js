const server = require('./server');
const should = require('should');

describe('Server TEST', () => {
    it('should require a port to start', () => {
        return server.start({
            repo: {}
        }).should.be.rejectedWith(/port/)
    });
});
