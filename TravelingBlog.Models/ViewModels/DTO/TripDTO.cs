namespace TravelingBlog.Models.ViewModels.DTO
{
    public class TripDTO
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public bool? IsDone { get; set; }
        public string Description { get; set; }
        public int? UserInfoId { get; set; }
        public double? RatingTrip { get; set; }
        public UserInfoDTO User { get; set; }

    }
}
