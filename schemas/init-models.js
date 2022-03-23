var DataTypes = require("sequelize").DataTypes;
var _batch = require("./batch");
var _client = require("./client");
var _curriculum = require("./curriculum");
var _curriculum_materi = require("./curriculum_materi");
var _curriculum_reviews = require("./curriculum_reviews");
var _instructor = require("./instructor");
var _jobs = require("./jobs");
var _jobs_talent_apply = require("./jobs_talent_apply");
var _placement = require("./placement");
var _roles = require("./roles");
var _talent = require("./talent");
var _talent_batch = require("./talent_batch");
var _talent_experience = require("./talent_experience");
var _talent_experience_media = require("./talent_experience_media");
var _talent_placement = require("./talent_placement");
var _talent_timeline = require("./talent_timeline");
var _time_line = require("./time_line");
var _user_roles = require("./user_roles");
var _users = require("./users");
var _users_client = require("./users_client");

function initModels(sequelize) {
  var batch = _batch(sequelize, DataTypes);
  var client = _client(sequelize, DataTypes);
  var curriculum = _curriculum(sequelize, DataTypes);
  var curriculum_materi = _curriculum_materi(sequelize, DataTypes);
  var curriculum_reviews = _curriculum_reviews(sequelize, DataTypes);
  var instructor = _instructor(sequelize, DataTypes);
  var jobs = _jobs(sequelize, DataTypes);
  var jobs_talent_apply = _jobs_talent_apply(sequelize, DataTypes);
  var placement = _placement(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var talent = _talent(sequelize, DataTypes);
  var talent_batch = _talent_batch(sequelize, DataTypes);
  var talent_experience = _talent_experience(sequelize, DataTypes);
  var talent_experience_media = _talent_experience_media(sequelize, DataTypes);
  var talent_placement = _talent_placement(sequelize, DataTypes);
  var talent_timeline = _talent_timeline(sequelize, DataTypes);
  var time_line = _time_line(sequelize, DataTypes);
  var user_roles = _user_roles(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var users_client = _users_client(sequelize, DataTypes);

  talent_batch.belongsTo(batch, { as: "taba_batch", foreignKey: "taba_batch_id"});
  batch.hasMany(talent_batch, { as: "talent_batches", foreignKey: "taba_batch_id"});
  placement.belongsTo(client, { as: "place_client", foreignKey: "place_client_id"});
  client.hasMany(placement, { as: "placements", foreignKey: "place_client_id"});
  users_client.belongsTo(client, { as: "uscl_client", foreignKey: "uscl_client_id"});
  client.hasMany(users_client, { as: "users_clients", foreignKey: "uscl_client_id"});
  curriculum_materi.belongsTo(curriculum, { as: "cuma_curr", foreignKey: "cuma_curr_id"});
  curriculum.hasMany(curriculum_materi, { as: "curriculum_materis", foreignKey: "cuma_curr_id"});
  curriculum_reviews.belongsTo(curriculum, { as: "cure_curr", foreignKey: "cure_curr_id"});
  curriculum.hasMany(curriculum_reviews, { as: "curriculum_reviews", foreignKey: "cure_curr_id"});
  curriculum_materi.belongsTo(curriculum_materi, { as: "cuma_cuma", foreignKey: "cuma_cuma_id"});
  curriculum_materi.hasMany(curriculum_materi, { as: "curriculum_materis", foreignKey: "cuma_cuma_id"});
  batch.belongsTo(instructor, { as: "batch_inst", foreignKey: "batch_inst_id"});
  instructor.hasMany(batch, { as: "batches", foreignKey: "batch_inst_id"});
  curriculum.belongsTo(instructor, { as: "curr_inst", foreignKey: "curr_inst_id"});
  instructor.hasMany(curriculum, { as: "curriculums", foreignKey: "curr_inst_id"});
  jobs_talent_apply.belongsTo(jobs, { as: "jtap_job", foreignKey: "jtap_jobs_id"});
  jobs.hasMany(jobs_talent_apply, { as: "jobs_talent_applies", foreignKey: "jtap_jobs_id"});
  talent_placement.belongsTo(placement, { as: "tapl_place", foreignKey: "tapl_place_id"});
  placement.hasMany(talent_placement, { as: "talent_placements", foreignKey: "tapl_place_id"});
  user_roles.belongsTo(roles, { as: "usro_role", foreignKey: "usro_role_id"});
  roles.hasMany(user_roles, { as: "user_roles", foreignKey: "usro_role_id"});
  talent_batch.belongsTo(talent, { as: "taba_tale", foreignKey: "taba_tale_id"});
  talent.hasMany(talent_batch, { as: "talent_batches", foreignKey: "taba_tale_id"});
  talent_experience.belongsTo(talent, { as: "taex_tale", foreignKey: "taex_tale_id"});
  talent.hasMany(talent_experience, { as: "talent_experiences", foreignKey: "taex_tale_id"});
  talent_placement.belongsTo(talent, { as: "tapl_tale", foreignKey: "tapl_tale_id"});
  talent.hasMany(talent_placement, { as: "talent_placements", foreignKey: "tapl_tale_id"});
  talent_timeline.belongsTo(talent, { as: "tati_tale", foreignKey: "tati_tale_id"});
  talent.hasMany(talent_timeline, { as: "talent_timelines", foreignKey: "tati_tale_id"});
  talent_experience_media.belongsTo(talent_experience, { as: "teme_taex", foreignKey: "teme_taex_id"});
  talent_experience.hasMany(talent_experience_media, { as: "talent_experience_media", foreignKey: "teme_taex_id"});
  talent_timeline.belongsTo(time_line, { as: "tati_timeline_name_time_line", foreignKey: "tati_timeline_name"});
  time_line.hasMany(talent_timeline, { as: "talent_timelines", foreignKey: "tati_timeline_name"});
  batch.belongsTo(users, { as: "batch_user", foreignKey: "batch_user_id"});
  users.hasMany(batch, { as: "batches", foreignKey: "batch_user_id"});
  curriculum_reviews.belongsTo(users, { as: "cure_user", foreignKey: "cure_user_id"});
  users.hasMany(curriculum_reviews, { as: "curriculum_reviews", foreignKey: "cure_user_id"});
  jobs.belongsTo(users, { as: "jobs_user", foreignKey: "jobs_user_id"});
  users.hasMany(jobs, { as: "jobs", foreignKey: "jobs_user_id"});
  jobs_talent_apply.belongsTo(users, { as: "jtap_user", foreignKey: "jtap_user_id"});
  users.hasMany(jobs_talent_apply, { as: "jobs_talent_applies", foreignKey: "jtap_user_id"});
  talent.belongsTo(users, { as: "tale_user", foreignKey: "tale_user_id"});
  users.hasMany(talent, { as: "talents", foreignKey: "tale_user_id"});
  user_roles.belongsTo(users, { as: "usro_user", foreignKey: "usro_user_id"});
  users.hasMany(user_roles, { as: "user_roles", foreignKey: "usro_user_id"});
  users_client.belongsTo(users, { as: "uscl_user", foreignKey: "uscl_user_id"});
  users.hasMany(users_client, { as: "users_clients", foreignKey: "uscl_user_id"});

  return {
    batch,
    client,
    curriculum,
    curriculum_materi,
    curriculum_reviews,
    instructor,
    jobs,
    jobs_talent_apply,
    placement,
    roles,
    talent,
    talent_batch,
    talent_experience,
    talent_experience_media,
    talent_placement,
    talent_timeline,
    time_line,
    user_roles,
    users,
    users_client,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
