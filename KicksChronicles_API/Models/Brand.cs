namespace KicksChronicles_API.Models
{
    public class Brand
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string LogoURL { get; set; }
        public ICollection<Shoe> Shoes { get; set; }

    }
}
