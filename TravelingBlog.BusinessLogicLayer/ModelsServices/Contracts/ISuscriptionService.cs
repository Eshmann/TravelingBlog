using System;
using System.Collections.Generic;
using System.Text;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts
{
    public interface ISubscriptionService//: IService<SubscriptionDTO, SubscriptionFilter>
    {
        IEnumerable<SubscriptionDTO> GetUserSubscription(string id);
        bool SubscribeTo(string id,int Subscriberid);
        bool UnSubscribeFrom(string id, int Subscriberid);
    }
}
