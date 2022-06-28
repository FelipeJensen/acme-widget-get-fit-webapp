export class ActivitySignUp {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public activityId: number,
    public activityDateId: number,
    public yearsOfExperienceInActivity: number,
    public comments: string
  ) {}
}
