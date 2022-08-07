import { UserTheme } from '../db/models';

const getThemeByOwnerId = (req:any, res:any) => {
  try {
    UserTheme.findOne({ where: { ownerId: req.body.ownerId } }).then((usertheme) => {
      if (usertheme === null) {
        return UserTheme.create({
          ownerId: req.body.ownerId,
          theme: 'light'
        });
      }

      return usertheme;
    }).then(theme => res.json(theme));
  } catch (error) {
    console.log(error);
  }
};


const updateThemeByOwnerId = (req:any, res:any) => {
  try {
    UserTheme.update(req.body, {
      returning: true,
      where: { ownerId: req.body.ownerId }
    })
    // @ts-ignore
      .then(([rowsUpdate, [updatedTheme]]) => res.json(updatedTheme));
  } catch (error) {
    console.log(error);
  }
};

export {
  getThemeByOwnerId,
  updateThemeByOwnerId
};
