export interface IAddLeaderboardRequest {
    data: object;
    ratingFieldName: string;
    teamName: string;
}

export interface IGetLeaderboardRequest
  {
    [x: string]: any;
    ratingFieldName: string,
    cursor: number,
    limit: number
  }
