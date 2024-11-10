Solid vs là gì?
- 
design parent 
=> chiêu thức 
solid
=> nội công

## solid
- 1 Single responsibility principle
- 2 Open/closed principle
- 3 Liskov substitution principle
- 4 Interface segregation principle
- 5 Dependency inversion principle


### Single responsibility
tách biệt và độc lập 
Một class chỉ nên giữ 1 trách nhiệm duy nhất 

=>EX gửi mail thì nên tách riêng 
### Open/closed
Có thể thoải mái mở rộng 1 class, nhưng không được sửa đổi bên trong class đó 
### Liskov Substitution
Trong một chương trình, các object của class con có thể thay thế class cha mà không làm thay đổi tính đúng đắn của chương trình
### Interface Segregation
Thay vì dùng 1 interface lớn, ta nên tách thành nhiều interface nhỏ, với nhiều mục đích cụ thể
### Dependency inversion
1. Các module cấp cao không nên phụ thuộc vào các modules cấp thấp. 
   Cả 2 nên phụ thuộc vào abstraction.
2. Interface (abstraction) không nên phụ thuộc vào chi tiết, mà ngược lại.
( Các class giao tiếp với nhau thông qua interface, 
không phải thông qua implementation.)
