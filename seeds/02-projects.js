exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "connor",
          description: "Finish the data models project",
          completed: false
        },
        {
          name: "Laura",
          description: "Finish the back-end project",
          completed: true
        },
        {
          name: "Beth",
          description: "Finish the data models project!!!!",
          completed: false
        }
      ]);
    });
};
