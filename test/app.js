let chai = require('chai');
let app = require('../app')
let chaiHttp =require('chai-http')

chai.use(chaiHttp);

chai.should();
describe("Server", () => {
    describe("GET /getServer", () => {
        it("should get all students record", (done) => {
            chai.request(app)
                 .get('/getServer')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
    
    });
});
