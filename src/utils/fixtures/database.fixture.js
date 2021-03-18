import User from '../../database/model/user.model';

const cleanAllTables = async () => {
  await User.deleteMany({});
};

export default cleanAllTables;
