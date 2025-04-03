import MenuItem from './MenuItem';



function MenuList({foodItems} ) {  
  return (
    <>
      {foodItems.map((item) => (
        <MenuItem 
          key={item.id} 
          id={item.id} 
          itemName={item.itemName}
          description={item.description}
          foodImage={item.foodImage}
          price={item.price}
          isFavorite={item.isFavorite}
          
          />
      ))}
    </>
  );
}

export default MenuList;