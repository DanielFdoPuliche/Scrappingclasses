import Dexie from "dexie";

export const db = new Dexie('linkedinPerfiles')

db.version(1).stores({
    person:'++id, name, education'
})