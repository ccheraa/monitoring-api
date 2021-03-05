import Database from './api/database';
Database..subscribe(v => {
  console.log(v);
});
Database.start();