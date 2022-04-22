const leaderboard = require('../../../models/leaderboard')
const leaderboardController = require('../../../controllers/leaderboard')

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn((code) => ({ send: mockSend, json: mockJson }));
const mockRes = { status: mockStatus };

const testplayer = {
    player_id: 1,
    username: 'test',
    score: 100
}

describe("Leaderboard controller", () => {
    beforeEach(() => jest.clearAllMocks());
  
    afterAll(() => jest.resetAllMocks());
  
    describe("index", () => {
      test("returns leaderboards with a 200 status code", async () => {
        jest.spyOn(leaderboard, "all", "get")
        .mockResolvedValue(["username", "score"]);
        await leaderboardController.index(null, mockRes);
        expect(mockStatus).toHaveBeenCalledWith(200);
        expect(mockJson).toHaveBeenCalledWith({"0": "username", "1": "score"});
      });
    });

    describe('create', () => {
      test('it returns a new user with a 201 status code', async () => {
          let test = {
              id: 1, username: 'jake', 
              score: '8'
          }
          jest.spyOn(leaderboard, 'create')
              .mockResolvedValue(new leaderboard(test));
              
          const mockReq = { body: test }
          await leaderboardController.create(mockReq, mockRes);
          expect(mockStatus).toHaveBeenCalledWith(201);
          expect(mockJson).toHaveBeenCalledWith(new leaderboard(test));
      })
  });
});
