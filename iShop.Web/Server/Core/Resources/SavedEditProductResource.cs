using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace iShop.Web.Server.Core.Resources
{
    public class SavedEditProductResource
    {
        public Guid Id { get; set; }      
        [StringLength(50)]
        public string Sku { get; set; }
        [Required]
        [StringLength(100)]
        public string Name { get; set; }
        [Required]
        public double Price { get; set; }
        [StringLength(255)]
        public string Summary { get; set; }
        [Required]
        public DateTime ExpiredDate { get; set; }
        [Required]
        public int Stock { get; set; }
      
        public ICollection<Guid> Categories { get; set; }

        public SavedEditProductResource()
        {
            Categories = new Collection<Guid>();
        }
    }
}
