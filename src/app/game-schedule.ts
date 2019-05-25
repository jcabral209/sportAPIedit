import { StylingIndex } from '@angular/core/src/render3/interfaces/styling';

export class GameSchedule {

        fullgameschedule: {
          lastUpdatedOn: string;
          gameentry: [
            {
              id: string;
              date: string;
              time: string;
              awayTeam: {
                ID: string;
                City: string;
                Name: string;
                Abbreviation: string;
              };
              homeTeam: {
                ID: string;
                City: string;
                Name: string;
                Abbreviation: string;
              };
              location: string;
          }
          ];
    };
}
