let chai = require('chai');
let expect  = chai.expect;

let serverModule = require('../modules/server.module')


describe('Get Online Servers', () => {

    beforeEach(function() {
      serverModule.initServer();
    })

    it('it should get online servers array', (done) => {
    expect(serverModule.getOnlineServer()).to.be.an('array')
    done();
    });


    // it('it should be no online servers',  (done) => {
    //     serverModule.findServer().catch(err=>{
    //          expect(err).to.be.equal('no online server')
    //         done();
    //     });
        
    // });
    // it('it should be lowest priority online servers', async (done) => {
    //    let lowestServer = await serverModule.findServer();
    //    expect(lowestServer).to.be.an('object')
    //     done();
        
    // });



});

