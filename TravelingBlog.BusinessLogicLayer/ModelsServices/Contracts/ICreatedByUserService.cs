namespace TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts
{
    public interface ICreatedByUserService
    {
        bool IsUserCreator(int creatorId, int entityId);
    }
}
