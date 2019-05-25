import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/components/Services/data.service';
import { GameSchedule } from 'src/app/components/interfaces/game-schedule';
import { ScheduleInterData } from 'src/app/components/interfaces/schedule-inter-data';

@Component({
  selector: 'app-areacontent',
  templateUrl: './areacontent.component.html',
  styleUrls: ['./areacontent.component.css']
})
export class AreaContentComponent implements OnInit {

  sportNow = 'https://api.mysportsfeeds.com/v1.0/pull/';
  mlbLeague = 'mlb/2019-regular/full_game_schedule'; // MLB Regular Schedule
  nflLeague = 'nfl/2019-regular/full_game_schedule'; // NFL Regular Schedule
  nhlLeague = 'nhl/2019-playoff/full_game_schedule';  // NHL Payoff Schedule
  nbaLeague = 'nba/2019-playoff/full_game_schedule';  // NBA Payoff Schedule
  // nbaLeague = 'nba/2019-regular/full_game_schedule';  // NBA Regular Schedule
  // sportNow = 'https://api.mysportsfeeds.com/v1.0/pull/nhl/2019-playoff/full_game_schedule.json';  // NHL
  // https://api.mysportsfeeds.com/v1.0/pull/mlb/2019-regular/full_game_schedule.json;  //MLB
  // https://api.mysportsfeeds.com/v1.0/pull/nfl/2019-regular/full_game_schedule.json;  //NFL
  // https://api.mysportsfeeds.com/v1.0/pull/nba/2019-playoff/full_game_schedule.json;  //NBA
  // https://api.mysportsfeeds.com/v1.0/pull/nhl/2019-playoff/full_game_schedule.json'; //NHL
  apiURl = this.sportNow;
  title = 'Please select your League';
  league: string;
  fullArray: [];
  gSArray: GameSchedule[];
  // apiURl: string;
  displayData: ScheduleInterData[] = [];
  fullGameSchedule: GameSchedule;
  choseLeague: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.apiURl = this.sportNow + this. searchLeague + '.json';
    // console.log('This is the URL to be search: ' + this.apiURl);
    // this.getSportsData(this.apiURl);
  }
  getSportsData(url: string) {
    this.displayData = [];
    this.dataService.getURL(url).subscribe
      (
        x => {

          this.fullGameSchedule = x;
          let count = 0;
          // console.log('My ALL Object: ', this.fullGameSchedule);
          // console.log('This is the ID: ', this.fullGameSchedule.fullgameschedule.gameentry[0].id);
          // console.log('This is the date: ' + this.fullGameSchedule.fullgameschedule.gameentry[0].date);
          // console.log('This is the time: ', this.fullGameSchedule.fullgameschedule.gameentry[0].time);
          // console.log('This is the location: ', this.fullGameSchedule.fullgameschedule.gameentry[0].location);
          for (const schedule of this.fullGameSchedule.fullgameschedule.gameentry) {
            const nfo: ScheduleInterData = {
              num: count++,
              id: schedule.id,
              date: schedule.date,
              time: schedule.time,
              awayTeamCity: schedule.awayTeam.City,
              awayTeamName: schedule.awayTeam.Name,
              awayTeamAbbreviation: schedule.awayTeam.Abbreviation,
              homeTeamCity: schedule.homeTeam.City,
              homeTeamName: schedule.homeTeam.Name,
              homeTeamAbbreviation: schedule.homeTeam.Abbreviation,
              location: schedule.location,
            };

            this.displayData.push(nfo);
            // console.log('My ALL Object: ', schedule);
            // console.log('This is the ID: ', schedule.id);
            // console.log('This is the date: ' + schedule.date);
            // console.log('This is the time: ', schedule.time);
            // console.log('This is the location: ', schedule.location);
            // console.log('Home Team is: ' + schedule.homeTeam.City);
          }
        }
      );
  }
  SelectLeague(leagueType: string) {
    let url: string;
    if (leagueType === 'MLB') {
      // Set the api to MLB
      url = this.sportNow + this.mlbLeague + '.json';
      this.league = 'MLB';
      this.title = leagueType + ' 2019 Regular Schedule';
    }
    if (leagueType === 'NBA') {
      // Set the api to NBA
      url = this.sportNow + this.nbaLeague + '.json';
      this.league = 'NBA';
      this.title = leagueType + ' 2019 Payoff Schedule';
    }

    if (leagueType === 'NFL') {
      // Set the api to NFL
      url = this.sportNow + this.nflLeague + '.json';
      this.league = 'NFL';
      this.title = leagueType + ' 2019 Regular Schedule';
    }
    if (leagueType === 'NHL') {
      // Set the api to NHL
      url = this.sportNow + this.nhlLeague + '.json';
      this.league = 'NHL';
      this.title = leagueType + ' 2019 Payoff Schedule';
    }
    // send to service
    this.getSportsData(url);
  }
}
