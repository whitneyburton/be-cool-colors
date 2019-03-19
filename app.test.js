import request from 'supertest';
import app from './app';
const environment = process.env.NOVE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
import projects from './data';

describe('Server', () => {
  beforeEach(async () => {
    await database.seed.run();
  });

  describe('GET /api/v1/projects', () => {
    it('should return all projects in the DB', async () => {
      const numExpectedProjects = projects.length;
      const response = await request(app).get('/api/v1/projects')
        .expect(200);
      const result = response.body;
      expect(result.length).toEqual(numExpectedProjects);
    });

    it.skip('should return a 500 response error', async () => {

    });
  });

  describe('GET /api/v1/palettes?', () => {
    it('should return a palettes that match the query param', async () => {
      const expectedPalette = database('palettes').first();
      
    })
  })
});