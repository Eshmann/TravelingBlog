using System;
using System.Collections.Generic;
using System.Text;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts
{
    public interface ISettingsService
    {
        void EditPhoto (SettingDTO settingDTO);
        void EditUserName(SettingDTO settingDTO);
    }
}
