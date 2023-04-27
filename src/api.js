import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  // static async getAllCompanies(){
  //   let res = await this.request(`companies/`);
  //   return res.companies;
  // }

  /** Get list of companies by name */

  static async getCompanies(nameLike) {
    // let res = await this.request(`companies/?nameLike=${nameLike}`);
    let res = await this.request(`companies`, { nameLike });
    return res.companies;
  }

  /** Get details on a job by id. */

  static async getJob(jobId) {
    let res = await this.request(`jobs/${jobId}`);
    return res.company;
  }

  /** Get list of jobs by search term*/

  static async getJobs(title) {
    // let res = await this.request(`jobs/?title=${title}`);
    console.log("title in api getJobs=", title);
    let res = await this.request(`jobs`, { title });
    console.log("res in api on getJobs=", res);
    return res.jobs;
  }
  /**
     * registerUser: { username, password, firstName, lastName, email }
     * register user and get jwt token back
    */
  static async registerUser({ username, password, firstName, lastName, email }) {
    console.log("registerUser");
    let res = await this.request(`register`, { username, password, firstName, lastName, email });
    return res.token;
  }

  /**
   * loginUser
   * - input: { username, password }
   *
   * Login user and get jwt token back
  */
  static async loginUser({ username, password }) {
    console.log("loginUser");
    let res = await this.request(`token`, { username, password });
    return res.token;
  }

  /** GetUser
  * Get info on user by username
  * returns { username, firstName, lastName, isAdmin, jobs }
  * where jobs is { id, title, companyHandle, companyName, state }
  */
  static async getUser({ username }) {
    console.log("getUser");
    let res = await this.request(`${username}`);
    return res.user;
  }

}

export default JoblyApi;
