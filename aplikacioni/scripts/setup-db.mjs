import { neon } from '@neondatabase/serverless';
import { readFile } from 'node:fs/promises';

const schema = process.argv[2] || 'schema.sql';
if (!['schema.sql', 'schema-java05.sql'].includes(schema)) throw new Error('Zgjidh schema.sql ose schema-java05.sql.');
if (!process.env.DATABASE_URL) throw new Error('Vendos DATABASE_URL vetëm në .env.local.');
const sql = neon(process.env.DATABASE_URL);
const content = await readFile(new URL(`../${schema}`, import.meta.url), 'utf8');
// Këto dy skema të laboratorit nuk kanë funksione apo vargje me pikëpresje.
const statements = content.split(';').map(value => value.trim()).filter(Boolean);
await sql.transaction(statements.map(statement => sql.query(statement)));
console.log(`${schema}: u ekzekutuan ${statements.length} komanda me sukses.`);
