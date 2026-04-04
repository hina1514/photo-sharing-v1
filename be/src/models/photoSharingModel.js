import models from "../data/models.js";

export function getSchemaInfo() {
  return models.schemaInfo();
}

export function getUserList() {
  return models.userListModel();
}

export function getUserById(userId) {
  return models.userModel(userId);
}

export function getPhotosOfUser(userId) {
  return models.photoOfUserModel(userId);
}
