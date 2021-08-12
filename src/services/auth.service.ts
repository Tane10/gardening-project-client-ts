import { Container, Service } from "typedi";
import axios from "axios";
import store from "@/store";
import { IUser } from "@/model";

@Service("auth.service")
export class AuthService {
  private httpConfig: any;
  private baseUrl: string;

  constructor() {
    this.httpConfig = {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    };
    this.baseUrl = store.state.api;
  }

  public async login(username: string, password: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      axios
        .post(`${this.baseUrl}/login`, { username, password }, this.httpConfig)
        .then((res) => {
          res.status == 200 ? resolve(true) : reject(res.data);
        })
        .catch((err) => {
          throw err;
        });
    });
  }

  public async sign(userDetails: IUser): Promise<boolean> {
    const { username, password, email, type, fullname } = userDetails;
    console.log(username);
    return new Promise((resolve, reject) => {
      axios
        .post(
          `${this.baseUrl}/signup`,
          { username, password, email, type, fullname },
          this.httpConfig
        )
        .then((res) => {
          res.status == 200 ? resolve(true) : reject(res.data);
        })
        .catch((err) => {
          throw err;
        });
    });
  }
}
