## Formik:
Formik, React tabanlı uygulamalarda form yönetimini kolaylaştırmak ve form durumunu, form alanlarını yönetmek için kullanılan bir kütüphanedir. Form işlemlerini basit ve verimli bir şekilde yapmanıza yardımcı olur. Formik aşağıdaki ana özellikleri sunar:

Form Durumu Yönetimi: Formik, form alanlarının değerlerini ve durumlarını yönetmek için kullanabileceğiniz bir dizi hook ve bileşen sunar.

Form Gönderme ve Doğrulama: Formun gönderilmesi, gönderme işlemi sırasında hata mesajlarını yakalama ve kullanıcıya geri bildirim verme süreçleri Formik ile kolayca işlenebilir.

Dinamik Formlar: Formik, dinamik olarak oluşturulan formları yönetmek için kullanışlıdır. Form alanlarını programatik olarak eklemek veya kaldırmak mümkündür.

Form Alt Bileşenleri: Formun farklı bölümlerini ayrı bileşenler olarak düzenlemek ve bu bileşenleri kullanmak, kodunuzu daha modüler hale getirir.

## Yup:
Yup, JavaScript'te nesne doğrulama ve şema oluşturma için kullanılan bir doğrulama kütüphanesidir. Yup, özellikle form verilerinin doğrulanması gerektiği durumlarda kullanışlıdır. İşte Yup'ın bazı özellikleri:

Şema Tanımlama: Yup, veri doğrulama kurallarını tanımlamak için kullanabileceğiniz zengin bir API sunar. Bu kurallar, bir nesnenin veya veri yapısının nasıl olması gerektiğini belirler.

Özelleştirilebilir Hata Mesajları: Yup, doğrulama hatası durumlarında kullanıcıya verilecek özelleştirilebilir hata mesajlarını destekler.

Dinamik Doğrulama: Yup, verilerin dinamik olarak doğrulanması gerektiği durumlar için uygun bir şekilde kullanılabilir. Örneğin, bir form alanının değeri diğer bir alanın durumuna göre değişebilir ve bu duruma göre doğrulama yapılabilir.

Entegrasyon Kolaylığı: Yup, React projeleriyle ve diğer JavaScript projeleriyle kolayca entegre edilebilir. Formik gibi form yönetimi kütüphaneleriyle kullanımı oldukça yaygındır.

Formik ve Yup, React tabanlı web uygulamalarında kullanıcı girişi, veri gönderimi ve doğrulama gibi form işlemlerini daha düzenli ve hata toleranslı bir şekilde yönetmek için bir arada kullanıldığında güçlü bir kombinasyon oluştururlar. Formik form yönetimini kolaylaştırırken, Yup ise form verilerinin doğruluğunu sağlar.

### Gereksinimler

Projenin çalıştırılabilmesi için aşağıdaki yazılımların yüklü olması gerekmektedir:

- Node.js: [Node.js indirme sayfası](https://nodejs.org/)
- npm (Node Package Manager): Node.js kurulumu ile birlikte gelir.

  
### Genel Form
E-posta, yaş, şifre ve şifre tekrarı alanlarını içerir.
Formun geçerlilik kuralları Yup kullanılarak tanımlanmıştır.
Kullanıcılar formu doldurduktan sonra "Kaydet" düğmesine tıkladıklarında bilgiler işlenir ve form sıfırlanır.
### Portal Form
Kullanıcı adı, üniversite seçimi ve bir kullanım koşulları onay kutusu içerir.
Bu form da Yup kullanılarak geçerlilik denetlemeleri yapılır.
"Kaydet" düğmesine tıklanırsa, bilgiler işlenir ve form sıfırlanır.

![image](https://github.com/RabiaKuran/react-formik-yup/assets/59939284/12f2c60e-25cd-4bc5-8ed9-56945f617909)
![image](https://github.com/RabiaKuran/react-formik-yup/assets/59939284/139bef9b-0f21-4280-8cc9-28ea62cb6ed3)
![image](https://github.com/RabiaKuran/react-formik-yup/assets/59939284/bbc8637e-3e72-49a3-ae86-a0cf719ecae5)
![image](https://github.com/RabiaKuran/react-formik-yup/assets/59939284/7e15bb81-bb86-4628-9d4c-8bb39647fb88)

