exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resource")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("resource").insert([
        { name: "resource 1", description: "description1" },
        { name: "resource 2", description: "description2" },
        { name: "resource 3", description: "description3" }
      ]);
    });
};
