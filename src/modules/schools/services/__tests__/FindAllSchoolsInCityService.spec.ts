import FakeSchoolRepository from "@modules/schools/repositories/fakes/FakeSchoolRepository";
import FindAllSchoolsInCityService from "../FindAllSchoolsInCityService";
import School from "@modules/schools/infra/typeorm/entities/School";

describe('FindAllSchoolsInCity', ()=>{
    let fakeSchoolRepository: FakeSchoolRepository;
    let findAllSchoolsInCity: FindAllSchoolsInCityService
    beforeEach(()=>{
        fakeSchoolRepository = new FakeSchoolRepository(),
        findAllSchoolsInCity = new FindAllSchoolsInCityService(
            fakeSchoolRepository)

        fakeSchoolRepository.create({
            name: "Escola Adventista",
            address: {
                zipcode: '79950000',
                public_place: "Rua dos jardins",
                number: "1234",
                city: 'Dourados',
                state: "MS"
            }
        })
        fakeSchoolRepository.create({
            name: "Escola Weimar Torres",
            address: {
                zipcode: '79950000',
                public_place: "Rua Antonio Emilio",
                number: "123",
                city: 'Dourados',
                state: "MS"
            }
        })
    })

    it('should be able to find all School in a determinated city and state', async ()=>{

      const schools = await findAllSchoolsInCity.execute({
          city: 'Dourados',
          state: 'MS'
        })
        
        expect(schools).toHaveLength(2)

    }) 
})