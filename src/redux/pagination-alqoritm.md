# React Pagination Alqoritmi

# const [currentPage, setCurrentPage] = useState(0);
Hal-hazırda hansı səhifədə olduğumuzu saxlamaq üçün useState istifadə olunur
Başlanğıcda 0-cı səhifədədir (yəni ilk səhifə).


# const itemsPerPage = 4;
Hər səhifədə neçə məhsul göstəriləcəyini təyin edir.
Burada 4 göstərilib: deməli hər səhifədə 4 məhsul olacaq.


# const offset = currentPage * itemsPerPage;
Bu, hal-hazırda hansı məhsuldan başlamalıyıq sualına cavab verir.
Məsələn:
Əgər currentPage = 0 → offset = 0 → 0-cı məhsuldan başla.
Əgər currentPage = 1 → offset = 4 → 4-cü məhsuldan başla.
Bu, slice funksiyası üçün vacibdir (aşağıda izah olunacaq).


# const currentItems = products.slice(offset, offset + itemsPerPage);
Bu sətir products siyahısından yalnız cari səhifəyə uyğun olan məhsulları kəsib alır.
slice(start, end) metodu ilə:
Məsələn, slice(4, 8) → 5-ci ilə 8-ci məhsulu verir (4, 5, 6, 7 index-lər).
Beləliklə, ekranda yalnız 4 məhsul görünür.



# const pageCount = Math.ceil(products.length / itemsPerPage);
Ümumi neçə səhifə olmalı olduğunu hesablayır.
products.length – ümumi məhsul sayı.
itemsPerPage – bir səhifədə neçə məhsul var.
Math.ceil isə nəticəni yuxarı yuvarlayır ki, qalıq məhsullar üçün əlavə səhifə açılsın.
Məsələn:
10 məhsul var, hər səhifədə 4 → 10 / 4 = 2.5 → Math.ceil(2.5) = 3 səhifə



# const handlePageClick = ({ selected }) => { setCurrentPage(selected); };
ReactPaginate komponentində səhifə kliklənəndə bu funksiya işə düşür.
Yeni selected səhifə nömrəsini götürüb currentPage-i yeniləyir.
Bu da yenidən offset, currentItems dəyişkənlərini hesablamağa səbəb olur → ekrandakı məhsullar dəyişir.







# 🔹 React Pagination Alqoritmi — Addım-addım
Məhsulları (product-ları) redux və ya API vasitəsilə yüklə.
Hal-hazırda aktiv səhifəni saxlamaq üçün currentPage adlı bir dəyişən yarat.
Bir səhifədə neçə məhsul göstərmək istədiyini təyin et (məsələn, hər səhifədə 4 məhsul).
Hazırkı səhifəyə uyğun başlanğıc məhsul indeksini (offset) hesabla.
Ümumi məhsulların içindən yalnız indiki səhifəyə uyğun məhsulları götürmək üçün slice metodu ilə currentItems siyahısı hazırla.
Ümumi neçə səhifə olduğunu hesabla (ümumi məhsul sayı / hər səhifədəki məhsul sayı → yuxarı yuvarlaqla).
İstifadəçi səhifə nömrəsinə klik etdikdə currentPage dəyişənini yenilə.
Ekranda yalnız currentItems olan məhsulları göstər.
Pagination üçün ReactPaginate və ya başqa komponentlə səhifə keçidlərini göstər.