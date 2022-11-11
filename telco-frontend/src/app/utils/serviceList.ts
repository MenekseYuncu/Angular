export const serviceName: any = (id: number) => {
  let name = '';
  switch (id) {
    case 1:
      name = 'ADSL İnternet';
      break;
    case 2:
      name = 'VDSL İnternet';
      break;
    case 3:
      name = 'Fiber İnternet';
      break;
    case 4:
      name = 'Faturalı Telefon Hattı';
      break;
    case 5:
      name = 'Faturasız Telefon Hattı';
      break;
    case 6:
      name = 'Ev Telefonu';
      break;
    case 7:
      name = 'TV';
      break;
    case 8:
      name = 'Kurumsal İnternet';
      break;
    case 9:
      name = 'Güvenli İnternet';
      break;
    case 10:
      name = 'Fatura Ödeme';
      break;
    case 11:
      name = 'IPTV';
      break;
  }
  return name;
};
