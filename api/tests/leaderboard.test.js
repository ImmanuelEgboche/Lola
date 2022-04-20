const leaderboard = require('../models/leaderboard')
const leaderboardRoutes = require('../controllers/leaderboard')

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
        await leaderboardRoutes.index(null, mockRes);
        expect(mockStatus).toHaveBeenCalledWith(200);
        expect(mockJson).toHaveBeenCalledWith(["username", "score"]);
      });
    });
});
