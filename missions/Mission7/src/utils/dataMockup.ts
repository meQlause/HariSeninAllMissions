import { RequireSingleDataItem } from "./decorator";
import type { Content, ContentDetails } from "./types";

export class DataMockup {
  private mainData: Content[];
  data: Content[];

  constructor(mainData: Content[]) {
    this.mainData = mainData;
    this.data = [];
  }

  getRandomizeData(get: number): DataMockup {
    this.data = this.mainData.sort(() => 0.5 - Math.random()).slice(0, get);
    return this;
  }

  getAllData(): DataMockup {
    this.data = this.mainData;
    return this;
  }

  getId(id: number): DataMockup {
    this.data = this.mainData.filter((data) => data.id === id);
    return this;
  }

  @RequireSingleDataItem
  getDetails(): ContentDetails {
    return this.data[0].details;
  }
}
