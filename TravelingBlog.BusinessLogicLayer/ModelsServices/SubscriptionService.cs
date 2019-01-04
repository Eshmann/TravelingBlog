using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.LoggerService;
using TravelingBlog.DataAcceesLayer.Data;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Repositories.Contracts;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices
{
    public class SubscriptionService : ISubscriptionService
    {
        private readonly ApplicationDbContext Context;

        public SubscriptionService(ApplicationDbContext context)
        {
            this.Context = context;
        }

        public IEnumerable<SubscriptionDTO> GetUserSubscription(string id)
        {
            var user = Context.UserInfoes.FirstOrDefault(x => x.IdentityId == id);

            var entity = Context.Subscriptions.Where(x => x.UserInfoId == user.Id);
            List<SubscriptionDTO> subs = new List<SubscriptionDTO>();

            foreach(var i in entity)
            {
                var currUser = Context.UserInfoes.FirstOrDefault(x => x.Id == i.SubcriberId);
                if(currUser==null)
                {
                    continue;
                }
                subs.Add(new SubscriptionDTO
                {
                    FirstName = currUser.FirstName,
                    LastName = currUser.LastName,
                    SubcriberId = i.SubcriberId,
                    UserInfoId = i.UserInfoId
                });
            }


           return subs;
        }

        public bool SubscribeTo(string id, int Subscriberid)
        {
            if(id==Subscriberid.ToString())
            {
                return false;
            }

            var user = Context.UserInfoes.FirstOrDefault(x => x.IdentityId == id);
            var Subscriber = Context.UserInfoes.FirstOrDefault(x => x.Id == Subscriberid);

            if(user!=null && Subscriber!=null)
            {
                var subCheck = Context.Subscriptions.Where(x => x.UserInfoId == user.Id);
                foreach(var i in subCheck)
                {
                    if(i.SubcriberId==Subscriberid)
                    {
                        return true;
                    }
                }
                Subscription sub = new Subscription { SubscriberIdNavidgation = Subscriber, UserInfoIdNavigation = user };
                Context.Subscriptions.Add(sub);
                Context.SaveChanges();
                return true;
            }
            return false;
        }

        public bool UnSubscribeFrom(string id, int Subscriberid)
        {
            var user = Context.UserInfoes.FirstOrDefault(x => x.IdentityId == id);
            var Subscriber = Context.UserInfoes.FirstOrDefault(x => x.Id == Subscriberid);
            if(user==null || Subscriber==null)
            {
                return false;
            }
            var subEntity = Context.Subscriptions.FirstOrDefault(x => x.SubcriberId == Subscriber.Id && x.UserInfoId == user.Id);
            if(subEntity==null)
            {
                return false;
            }
            Context.Subscriptions.Remove(subEntity);
            Context.SaveChanges();

            return true;
        }
    }
}
