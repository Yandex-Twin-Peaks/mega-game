export interface IAddLeaderboardRequest {
    data: object;
    ratingFieldName: string;
    teamName: string;
}

export interface IGetLeaderboardRequest
  {
    ratingFieldName: string,
    cursor: number,
    limit: number
  }
