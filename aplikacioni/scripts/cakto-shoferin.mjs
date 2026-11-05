import { neon } from '@neondatabase/serverless';

const id = process.argv[2];
if (!id || !/^\d+$/.test(id)) throw new Error('Jep ID-në numerike GitHub të shfaqur pas hyrjes.');
if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL mungon.');
const sql = neon(process.env.DATABASE_URL);
const results = await sql.transaction([
  sql`UPDATE profilet SET roli = 'shofer' WHERE github_id = ${id} RETURNING github_id`,
  sql`UPDATE udhetimet SET shofer_id = ${id} WHERE id = '2' AND EXISTS (SELECT 1 FROM profilet WHERE github_id = ${id}) RETURNING id`,
]);
if (!results[0].length || !results[1].length) throw new Error('Hyr një herë në panel para caktimit të rolit.');
console.log('Profili i laboratorit u caktua shofer dhe pronar vetëm i udhëtimit 2.');
