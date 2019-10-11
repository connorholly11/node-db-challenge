exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("task")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("task").insert([
        {
          description: "do migrations",
          note: "rowValue1",
          completed: true,
          project_id: 1
        },
        {
          description: "do seeds",
          note: "rowValue2",
          completed: true,
          project_id: 1
        },
        {
          description: "run seeds",
          note: "rowValue3",
          completed: false,
          project_id: 1
        }
      ]);
    });
};
