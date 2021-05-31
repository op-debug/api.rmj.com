class UserService {
  constructor({repository}) {
    this.repository = repository;
  }

  async createOrError(data) {
    try{
      const Created = await this.repository.create(data)
      return { status: 201, data: 'User created' };
    }catch(error) {
      return { status: 500, data: error}
    }
  }

  async deleteOrError(data){
    try{
      const Delete = await this.repository.delete(data)
      return { status: 201, data:'User delete'};
    }catch(error){
       return { status: 500,data:error}
    }
  }

  async getAllAsList(data) {
    const users = await this.repository.gets(data);
    return { status: 200, data: users }
  }

}

module.exports = UserService;