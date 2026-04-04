import {
  getPhotosOfUser,
  getSchemaInfo,
  getUserById,
  getUserList,
} from "../models/photoSharingModel.js";

export function testInfo(req, res) {
  res.json(getSchemaInfo());
}

export function userList(req, res) {
  res.json(getUserList());
}

export function userById(req, res) {
  const { id } = req.params;
  const user = getUserById(id);
  if (!user) {
    res.status(404).send("User not found");
    return;
  }
  res.json(user);
}

export function photosOfUser(req, res) {
  const { id } = req.params;
  res.json(getPhotosOfUser(id));
}
