import fs from "node:fs/promises";

const DATABASE_PATH = new URL("db.json", import.meta.url);

export class Database {
  #database = {};

  constructor() {
    this.#load();
  }

  async #load() {
    try {
      const data = await fs.readFile(DATABASE_PATH, "utf-8");
      this.#database = JSON.parse(data);
    } catch {
      await this.#persist();
    }
  }

  async #persist() {
    await fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database, null, 2));
  }

  async insert(table, data) {
    if (!Array.isArray(this.#database[table])) {
      this.#database[table] = [];
    }
    this.#database[table].push(data);
    await this.#persist();
  }

  select(table, filters) {
    let data = this.#database[table] ?? [];

    if (filters) {
      data = data.filter((row) => {

        

        return
      })
    }

    return data;
  }
}
