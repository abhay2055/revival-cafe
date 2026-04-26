import React, { useState } from 'react';

const Order = () => {
  const [activeCategory, setActiveCategory] = useState("Coffee");

  const menuData = {
    Coffee: [
      { name: "Americano", desc: "A smooth and balanced coffee made with full-bodied espresso and water.", price: "$4.50+", image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Cappucino", desc: "Cappuccino is crafted with equal parts espresso, steamed milk, and velvety milk foam.", price: "$5.00+", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Cold Brew", desc: "Cold Brew is made by steeping coarsely ground coffee in cold water for an extended period.", price: "$5.00+", image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Espresso", desc: "Espresso is brewed by forcing hot water through finely ground coffee under high pressure. Consists of two shots of espresso.", price: "$3.00", image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "House", desc: "Our House Coffee is a Single Origin Brazil Medium Roast, showcases tasting notes of caramel, hazelnut and brownsugar.", price: "$3.50+", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Iced Coffee", desc: "Iced Coffee is made by brewing coffee and then chilling it over ice.", price: "$4.50+", image: "https://images.unsplash.com/photo-1517701604599-bb29b5c7fa39?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Latte", desc: "Latte is made with espresso and steamed milk, topped with a light layer of milk foam.", price: "$5.00+", image: "https://images.unsplash.com/photo-1593458533087-35335af55470?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Mocha", desc: "A mocha (or caffè mocha) is made with espresso, bittersweet chocolate syrup, steamed milk, and a topping of whipped cream.", price: "$5.75+", image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "White Mocha", desc: "A white mocha (or caffè white mocha) is made with espresso, white chocolate syrup, steamed milk, and a topping of whipped cream.", price: "$5.75+", image: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Café au Lait", desc: "Café au Lait is a classic french coffee made with equal parts brewed coffee and steamed milk.", price: "$4.50+", image: "https://images.unsplash.com/photo-1599398054066-846f28917f38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Cortado", desc: "", price: "$4.50", image: "https://images.unsplash.com/photo-1514066558159-fc8c737ef259?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    ],
    "Non Coffee": [
      { name: "Hot Chocolate", desc: "A rich, comforting beverage made from chocolate sauce mixed with steamed milk and topped with whipped cream.", price: "$4.00+", image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Masala Chai", desc: "Masala Chai is made by brewing black tea with a blend of aromatic spices such as cardamom, cinnamon, ginger, cloves, and black pepper.", price: "$5.50+", outOfStock: true, image: "https://images.unsplash.com/photo-1627916607164-7b20241db935?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Matcha Latte", desc: "Matcha Latte is a vibrant green beverage made with finely ground Japanese green tea leaves.", price: "$5.50+", image: "https://images.unsplash.com/photo-1515823664972-6d66979e268c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Steamer", desc: "Steamer is a creamy, warm beverage made from steamed milk, often flavored with your choice of syrup and whipped cream.", price: "$3.50+", image: "https://images.unsplash.com/photo-1576489922094-2cfe89fb1733?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Tea", desc: "Choose among our tea flavors which are offered hot (Earl Grey is offered Iced).", price: "$4.00+", image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Lemonade", desc: "", price: "$3.50+", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Water", desc: "", price: "$1.50", image: "https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    ],
    Specialty: [
      { name: "Authentic Chai", desc: "", price: "$5.75+", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Maple Cold Brew", desc: "", price: "$5.75+", image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Lavender Oat Latte", desc: "", price: "$5.75+", image: "https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Honey Vanilla Latte", desc: "", price: "$5.75+", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Honey Lavender Latte", desc: "", price: "$5.75+", image: "https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Mint Mocha", desc: "", price: "$6.75+", image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Gingerbread Chai", desc: "", price: "$6.75+", image: "https://images.unsplash.com/photo-1607598829561-bf9c836d538e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    ],
    Pastries: [
      { name: "Egg, Sausage, & Cheese Croissant", desc: "", price: "$3.95", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Chicken Honey Biscuit", desc: "", price: "$3.95", outOfStock: true, image: "https://images.unsplash.com/photo-1626074251263-652a2332158c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Caprese", desc: "", price: "$9.50", outOfStock: true, image: "https://images.unsplash.com/photo-1529312266912-b33cf6227e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Turkey, Pesto, & Swiss Croissant", desc: "", price: "$3.95", outOfStock: true, image: "https://images.unsplash.com/photo-1608151591873-45564c7604c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Brie Fig Ham Sandwich", desc: "", price: "$9.50", outOfStock: true, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
      { name: "Valentine Sugar Cookie", desc: "", price: "$1.50", outOfStock: true, image: "https://images.unsplash.com/photo-1612198966115-b90300067643?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    ],
    Miscellaneous: [
        { name: "Mobile Café Sticker", desc: "", price: "$0.50", image: "https://images.unsplash.com/photo-1572375992501-4b31362e6971?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
        { name: "4 Drink Flight", desc: "", price: "$20.00", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
        { name: "Revival Shirt", desc: "", price: "$24.99", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
        { name: "REVIVAL 16oz Travel Mug w/ Sip Lid", desc: "", price: "$40.00", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
        { name: "Valentine Bundle 2 Drink", desc: "", price: "$24.00", image: "https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
        { name: "Valentine Bundle 1 Drink", desc: "", price: "$14.00", image: "https://images.unsplash.com/photo-1596443686812-2f45229eebc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    ]
  };

  const getCategoryImage = (category) => {
    switch(category) {
      case 'Coffee': return "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
      case 'Non Coffee': return "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
      case 'Specialty': return "https://images.unsplash.com/photo-1517701604599-bb29b5c7fa39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
      case 'Pastries': return "https://images.unsplash.com/photo-1509365465984-115b15e2b615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
      case 'Miscellaneous': return "https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
      default: return "";
    }
  };

  return (
    <section id="order" style={styles.section}>
      <h2 style={styles.title}>Order Online</h2>
      
      <div style={styles.header}>
        <div style={styles.infoBox}>
          <div style={styles.infoLeft}>
            <h3 style={styles.storeName}>REVIVAL</h3>
            <p>115 West 42nd Street, Savannah, GA</p>
            <span style={styles.pickupBadge}>Pickup Only</span>
          </div>
          <div style={styles.infoRight}>
             <p style={{fontWeight: 'bold', marginBottom: '5px'}}>Schedule for later?</p>
             <button style={styles.scheduleBtn}>Schedule Order</button>
          </div>
        </div>

        <div style={styles.rewardsBox}>
            <div style={styles.rewardIcon}>🎁</div>
            <div>
                <h4 style={styles.rewardTitle}>Rewards & Savings</h4>
                <p>Earn toward rewards with every visit.</p>
                <p style={{fontSize: '0.9rem', color: '#666'}}>Earn 1 bonus visit just for signing up</p>
            </div>
            <button style={styles.joinBtn}>Join Rewards</button>
        </div>
      </div>

      <div style={styles.menuContainer}>
        {/* Category Navigation */}
        <div style={styles.categoryNav}>
            {Object.keys(menuData).map(cat => (
                <button 
                    key={cat} 
                    style={{
                        ...styles.catBtn,
                        ...(activeCategory === cat ? styles.activeCatBtn : {})
                    }}
                    onClick={() => setActiveCategory(cat)}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Category Banner Image */}
         <div style={styles.categoryBanner}>
            <img src={getCategoryImage(activeCategory)} alt={activeCategory} style={styles.bannerImage} />
            <div style={styles.bannerOverlay}>
              <h3 style={styles.bannerTitle}>{activeCategory} Menu</h3>
            </div>
         </div>

        {/* Menu Items */}
        <div style={styles.itemsGrid}>
            {menuData[activeCategory].map((item, index) => (
                <div key={index} style={{...styles.itemCard, ...(item.outOfStock ? styles.disabledCard : {})}}>
                    {item.image && (
                      <div style={styles.itemImageContainer}>
                         <img src={item.image} alt={item.name} style={styles.itemImage} />
                      </div>
                    )}
                    <div style={styles.itemInfo}>
                        <div style={styles.itemHeader}>
                            <h4 style={styles.itemName}>{item.name}</h4>
                            <span style={styles.itemPrice}>{item.price}</span>
                        </div>
                        {item.desc && <p style={styles.itemDesc}>{item.desc}</p>}
                        {item.outOfStock && <span style={styles.outOfStockBadge}>Out of Stock</span>}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 20px",
    backgroundColor: "#fff",
    fontFamily: "'Helvetica Neue', sans-serif",
  },
  header: {
    maxWidth: "800px",
    margin: "0 auto 40px",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    color: "#2c3e50",
    marginBottom: "30px",
    textAlign: "center",
  },
  infoBox: {
    backgroundColor: "#f8f9fa",
    border: "1px solid #e9ecef",
    borderRadius: "10px",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "left",
    marginBottom: "20px",
    flexWrap: "wrap",
    gap: "20px",
  },
  storeName: {
    color: "#d4a373",
    marginBottom: "5px",
  },
  pickupBadge: {
    display: "inline-block",
    backgroundColor: "#2c3e50",
    color: "white",
    fontSize: "0.8rem",
    padding: "4px 10px",
    borderRadius: "20px",
    marginTop: "8px",
  },
  scheduleBtn: {
    padding: "8px 16px",
    backgroundColor: "transparent",
    border: "2px solid #d4a373",
    color: "#d4a373",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  rewardsBox: {
    backgroundColor: "#fff3cd",
    borderRadius: "10px",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginTop: "20px",
  },
  rewardIcon: {
    fontSize: "2rem",
  },
  rewardTitle: {
    color: "#856404",
    marginBottom: "4px",
  },
  joinBtn: {
    marginLeft: "auto",
    padding: "8px 16px",
    backgroundColor: "#856404",
    color: "white",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  menuContainer: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  categoryNav: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "40px",
    flexWrap: "wrap",
    borderBottom: "1px solid #eee",
    paddingBottom: "20px",
  },
  catBtn: {
    padding: "10px 20px",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "1rem",
    color: "#666",
    cursor: "pointer",
    borderRadius: "20px",
    transition: "all 0.3s",
  },
  activeCatBtn: {
    backgroundColor: "#d4a373",
    color: "white",
    fontWeight: "bold",
  },
  itemsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  },
  itemCard: {
    border: "none",
    borderRadius: "15px",
    padding: "0", 
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    overflow: "hidden",
    height: "100%",
  },
  disabledCard: {
    opacity: 0.7,
    backgroundColor: "#f9f9f9",
    cursor: "not-allowed",
  },
  itemImageContainer: {
    height: "200px",
    width: "100%",
    backgroundColor: "#eee",
  },
  itemImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s",
  },
  itemInfo: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  itemHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "10px",
  },
  itemName: {
    fontSize: "1.2rem",
    color: "#2c3e50",
    fontWeight: "600",
  },
  itemPrice: {
    color: "#d4a373",
    fontWeight: "bold",
  },
  itemDesc: {
    fontSize: "0.95rem",
    color: "#777",
    lineHeight: "1.5",
  },
  outOfStockBadge: {
    display: "inline-block",
    marginTop: "10px",
    fontSize: "0.8rem",
    color: "#dc3545",
    backgroundColor: "#f8d7da",
    padding: "4px 8px",
    borderRadius: "4px",
    alignSelf: "start",
  },
  categoryBanner: {
    position: "relative",
    height: "200px",
    marginBottom: "40px",
    borderRadius: "15px",
    overflow: "hidden",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  bannerOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bannerTitle: {
    color: "white",
    fontSize: "3rem",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
};

export default Order;
