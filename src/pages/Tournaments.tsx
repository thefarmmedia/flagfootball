import { useState } from 'react'
import { AlertCircle, CalendarDays, CheckCircle, Clock3, MapPin, PartyPopper, Trophy } from 'lucide-react'
import PageMeta from '../components/ui/PageMeta'
import { siteConfig } from '../config/site'
import { trackEvent } from '../utils/analytics'

const flyerSrc = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABUOEBIQDRUSERIYFhUZHzQiHx0dH0AuMCY0TENQT0tDSUhUXnlmVFlyWkhJaY9qcnyAh4iHUWWUn5ODnXmEh4L/2wBDARYYGB8cHz4iIj6CVklWgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoL/wAARCADlANwDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAgMEAQAFBv/EADwQAAICAQMCAwYDBQcFAQEAAAECAxEABBIhMUETIlEFFDJhcZFSgbEjM0JyoRU0YsHR4fAGJEOCkvGT/8QAGAEBAQEBAQAAAAAAAAAAAAAAAQACAwT/xAAjEQACAgIDAAMBAAMAAAAAAAAAAQIREiEDMVETQWEiMkKB/9oADAMBAAIRAxEAPwD5WGSThFYV889HQaDWa6bYjKoHViOBkES1HuVQx9DnrezvaEsEKxR6ZzLe410IyekS2xkvsd4ZfDk16BrFDwjzlDf9NanadmtiZqsL4dE/1yqHQyav2efenuSX4WH8Pfj6ZfoI9UVRtUsK7ehjJLMa+fHTOeTN4o+Nk0+qjdlZlBU0bGL/AG3aRCMq9oPLrvaci/CS5AsAffFS6Bo1DI4biyLo5szomDzlwnAJ+WbG+okYBACSaHGM0zM24my6jy36nDELQQEmTZMxvbf8ObSsGKkMsfxuB+WLM79nB/8AXAIDyAM5PqcKQov7vp8+uVIDPeZfUfbNSeZ3VARbGhxjNLHG7RBxRYm2PNAfLHuIECjxA9qxNUBfbOblTo2o2H7lqqBE8DA9NrX/AM6Zp0WrDbTLBfPF+mLuHZHSkta7gL59c5miEvw+Yp5QQau/9MMvwcf073bU29ywgIBZJrr2yM6mQHqD+WWE6cluCAGbqT0rj+ubtgdIgGFkqGsA9euWf4WBENRMTQo/lhh9QWCgAk/LMmCqAyDbZINdOMFWAU11+udY00YemNlOojYA0bFg1hIuqdSybWAFmu2Hp9jIRIxTaLFdzhQj9gp8p3sRz1wk0lZ14oKcqYqYTwhNzC2F1XQZk5nh22QdyhumPki2kbSwNE8NmNJqNqksJLFU6g1eZUky5OKSf8iIGmmkC2AL5bb0xbzTK201f0x21lSio2DrTYcZhMiNKrhRyARdjFNMy4SSO8OcRb3cL3rb0xblgWUTrxXIX1xssglKnffHNnqTgNp2ADWCOvrm9fRzin9k00MqHdICQf4uoxOehAl71MditwYkXkupjEUzKvK9R9MGqNNfYUZ8tDgEdc9n2br3igOlMLPIf3Tgjg/P5Z4kY4PHAGelp6gQyOTtrjcOmHa2YumfTSRxjTrHrtcCdo3IlAH6Ac5kGt9mxEyHURtMOBRYdBxQPf558tNO0ili5YAWO3OSEHqDx6+uc8TpZ6EzCbUtO6kGVmYUa2/fFyFHUtCxB6gAGyO5zDIw2+Iw20Cw+f8Aw4qebc4KlSAKFemQ6H6JAiNJ1N0AO+JniZ2Jfb6cDjBg1Mgc7eR6dsqAd1s7SAOw6Z2UlWzlTvRIYPDQM3l3dCRiojtEhoWBYJF1lUzDxHMh3FCNoJv8sRM7ukkkhtmpRx6ZhuzSVHt6LR6WT2ausk0z6iQrxHvJ5uuPTJfaOqbTxPA/syLTeMvlqiy5fHIsXsiGBpxppdg57r9B6552oi0hhk/bz6mbbSM/QepwI9iF9V/YunbSkHUMi8v0ruTkntqUj2XF7wyDWWD5eoPyr5ZPqZjN7LXRxwyARhafpZHHOeaNDKJAHViQwUrRBs9BiR9B/wBQFvA0ibjsllAdfUcdcH2xLpNB4UbaGOSNgf4QpGSe0dTLrI4gdO0bRuGW+/yPGM102l9qxxe8PJp3S6AXcMiJvaP9nJpRNoGG9mAKb728eh655z14zDaBXGejrtBo4dGZ9FMXkStwBsV3OeebaQPwQ/P+uUasTDt4PIzi7IQoNhTYrKEjXUKNi0Aaxi6Z1BMUNqOdx6nKVNnVJraJRqiCCyg8V9RhidyqskTFVIsgX0zHPO2VQfkeCMOJpdOpEEgo8kEZjFD8kxc2oUw7FH3GNV1MYAYb664S6qZ/K8Mb2fTAmkiMke7TAbb3BT8WWGtEuZp2xjCNwQDZoDpnHTxEMQaA9DkswQuDArKPQ+uAsjqa3dMMH9HRc0X2ipUVGJMZawVXaeft6YmdlllLAcdBxnIxMhJajXY5z0W5JJ+mdVK40efk9QiMkIeeCRl3iN7rIW5BNVf2yXSxmVwoPHf5ZS8yxB4tq7R3HJvBswlsldySB1F3hyLtA6isGNGVi1eXHmJpEDhwS3Y/pgIJmUUv8JF+vOTuwYkKAB3rHGJx1jI9T65ylYt26PnirwEyCk5P58cgZSz0m+OE7a6s3X51nn7jd98u0KtrJxE7nYBZrKTpWxir0iMklyb6m+cOMjbJdkcH689MfHpUkGpk3UkXT54fs/SvLDJIW2gilFfERmXNJWaUJXQEhPiMTWzcKo8fTjNGpki/Zc7lXbR479vvi/BJ0T6mRyTu2qD3zWjI9nrK7AgtSqewxyM4sNNVPMzKPLdXZ+f++MM8lGpSWBu76+n6DM0Wjmm0520L5XnGSwzDZAEjsmgw9e+GaurNxhqxHvmoWWjbOCGu+/Y84S6x2kZmBYAkseo5r/TF+7TTvCKAD2AfpjvdY/ADSTPt3EBEW+mTmkZXG2ICmjfK7DQJ6n88VL8dAkAKOfUZZBpIWgM26c21BVHOHDoo9VHM5DgrwoY83WHyJD8UiTRytFJw3lPUeuVpqGWL94enHHTJ9TAkGi07V+1clib7ZwkdYhSkjqDfH55pSvaLcdCtQzFix+ItedG+0cX9LzFZnksm66nKk0yvGCSBf4R0+uJi9ghvL5BzVYCeVB4gsdF564LAoxBrqemcFMrBFXc7dhim0QxX2qzyURzXPX5YDbXAtQN1VRwNQpjJDjlfLWDGKXcOrdAfXNWCf0EWWJTGCpN8kDOqgOb+mKYhTtr88YBtAAOZMy6KdIjJEix/vJOb7KPU5jaVSx2EvXLMeBx/lgJPLGgSMIN6AE9yMPU6r9n4YoKa4UYHRAq4MlAjYwrBSRlZY3UHaeOczToSR0HqTi5f3pI9TWL2YWigTOtlweoIArgDJ9RKJCDvZvqMJyypR5J73eIvngYIWdtPp1z0vZzRQ6aacgkqK5/yyGICy3oM4yN4AiBoE7jhOOSo1CWLs9Mzx+4qERY/GaqHPHrhpqdOkiwqSRGhAN8HPIVySqFd5HCi8+gBlh0MYXwNPL/FuqgP9c884qOvTp8zIJ4lbRxRltgALbQCbOBqfA92jjaRyI14VV6k/PK9A00+sMssySxIOWIofkMPWattKGMzGVpPhTbSKPr3wyaliZfJf0QabV+UUAWUbQbogYwakRzoSgUb7NWQPzyqNl0ns+IGWOKR+QypusZHDFL7Q1RaSZjAh8zPxx9M1cXbfRLkkh41aNHK6oQsdiM18sVJKDo41XUFAqebYLs5Zqijezp0DxJGCFTabr/c5sUEMekj0Zp5K3mPdt3nMKUVuhfK3pkSyo2jijWaXyjzCMc/TE+9DT6eFELbg+9rwNdrNSzNC6CBF/8AGorLoRp9V7LjfUqUWA8sB8WdGlFWw+R3oj9pSjUyoYlJRV/IZL5tm2xQ6ZRq9YNQVREEcCfCo7/M4MfgGgw57m6zrBVGqMtuTsWD4dA/F1642KRmAi8QhWNmjWJ1AAfgV6C7xakg9LzZlHqNpoQTHuG6rJUcLiHBiQJuG9+PKei4ayHTJTN+0I4Uf5nJJCXlL3yT3wND9sDeWR2Brt8IOTghV8y7j2F9MJJNtBlUj0IvAm2iRhGbU9MUDRjs0r21lug+Qxn1I4xQLKKBr54afCMmYl0MgeR1CqFIUdWA4wlhG/e0kd3+IYtONA5H4x+hyqFZ0jDmFWXYANx7f8OYbOtpI1SqRuoZLYV8XfJvCB/8iD88qi96eVmCJbACiaxu7UHybYT8uee+ZcmGa8IDCTx4yED5nMOnJ+F1Jq9o6nL45NTIgcCJVJsWCK/1yMMz+0F3OHPHI6Ypsk03VE4arAPXPQ0fs/SyaF9VqdUyqrbaRb5zzZF2k/XrnrSa99J7I0sUBRJHtmpRwO3550MvsBfZsEu2WKcwwFtiNL1dvkBnSwNr9c0csiwiP9moPyxo1WkMWknllJOnTiGuS99TksU/iiSSR/MWLc1wT3GYmvsirSaBlkl0TahI9/JO2yQPTGaSCKeCaNNTNPAhVQPDskn0vItPq1jGpkFhvD8NLNmyeTeUaPVQ6T2fEp1TK28yMkQ5b0F4qOtkUBdTN7TbSQahBDGBukVRx8vrkDxOnszUSPMwXxdgFfGe95SntaCORCmnVfEk8SWh09KxWon0c8MEckzAglmCpSgk8k4qMV0gEamP3LTaaMyMTKBK6enpg6JG9o+0FEkrIzc7gLIrGe1JtJqJWkjaV34A4pVA7DN9kOmnE8rziIlNimrYX3AxpEVar2e03gIs5ckEnxhtZFH8R+WBPoneEBdQr6ZITImwdSDVffCb2jptQs0Lu8YaMJ4zLbPRs3gxe1YojL4afs44hHCpHXnqf1wpETD2XJH43vDBFiQMa5tj0X64Gt0g0WoSESbn2Bn/AMJPbPQHtCLUyaUSyBEQCSWx8bjpnne0JNPJO0kUssruSWZhQxEnlreT+mAM0UepzSAORZ+eQ0NooHkBshbB9MNJ0KgmSXxT14FYtSGhkAHmofrhxlVjCtp2LdzWA14UvD0IMu488lcwx7FdnMoUciiuA0SleIqN3d4QjXb5oePWxhkhxfpPLMnWJ5Cb6MB0zpV2yEAAd+M3VeGqhRFsY82PTMl/eGzfT9MrMTVIxf7g384/Q50SauSIyR+IUXgkHMUf9g384/Q5d7MEzaYbIh5S212ah5gAeO/TK0rbNNN0kBBpZ9ze9BzQv94BQ79/pjpNGCu1Uk3kfxScA8Cjz15GAyTPrJY00wR3UhyWscm7x8UmoMzsFiRQx3OXIBbjp9hllEMJeHnjQag7QzopK7qLdBi4EaPXCN/iVqOepEZ3YsJoUMYK2pJ4vrXQZ54CD2iDG4cFrJAoXhknaRpRaabEHaxYEsT2rAk3bqfggAYyKEyux3BQvN4z3RmZt0g4Nc982hwlLaR3iRsu0dOABVk/PCdo9h2ow8tDy4EMc0ReRCAU4vHF9XvLmQbto5ofbI1c/BMLKqbShu7PGM3i+Imvv5MIe8JIWWdd7fEa6Zw96UsxlA3E3xkS+RLozxY/LuUluvw4DqpB2q1lePLmQzaiSQsrgMqnmsaw1ZfeZBuKi+PtkVzkuhULbE2sh9fhw96LyI25F/Dht47CjqF29zXfBZdSUoyCjwV9MNknyJdHb0NERN/85weMADwiO3w9cJDqWG4zhb5qvXML6nad0woA3xls1fJ3Qtpo0obfMOtjriY4pJ2YrXzJNAZTFCNTE80nLAWfn1/0xhRoSY6Hl6d+hrE5OWb2SzaRkBZG3oByehH5ZkRRkZGYLQ61npzieaUyOylqIuyaAyZ9LGhZmoNuHA5q8gdLokgpSxY0BV/cZ6Te0tOylLkAPF1nnQm2eR/hUeYevyx0Aim3bdOvHq4Gc5RUnsYzcdILSxmWMszS/LawA/rh+7ndsYzFuT8Q6YIhXbfgJz/jGd4SbiBAtgWf2gzf/DFk2rj8ORRbGx/EcKb94fywpHhikKNANw7hrwZQRIbbcet4fYS6MX+4N/OP0OU+ypY9ypKHdg3kUdB88mQ1oH/nH6HLo59SYUSHTpESP3h75ifTR2TSabHq8kOo1krSblQCvme2J0jBNMW1MsTQtbbepvFx6fUPEY5JQEeQhiObrvnDSaeNSH+IGrY0Ca7fpnPFdE+XehUcqR6CURm5JWoAdQuI0yMmqi3AgnkX6Za0+lRGSNQJDVMg4B6HEKGOr8Z2sA3wp6DOifZhNyaM0zCNGYsos98L3iMKQpomzeK9zlfzKCQx4pTz/TM9zl9DV18J/wBM6WjsuSaVJDxKmzaA20Vz65kswbaDuU3Z46emMkbUSKsewCNa8qq1EDpjH1GpkDXCtN3CtfT1/PK0HyclVROZkYE0eCD065rzhlKmxu4uvvhnVTwedYkC2DRB5qgOvpmD2hOVrw1rjpY6YrfQPmmtMngk8DdSktdVWNbUKxIJYUetemFHqdWodkh5clt20n/lZkGo1MMYRdODyWJKEk33xxZlc0kqR3jLTNtYg9tvH1zDOgJHmo2Saxh1uq3E+AASK6HFS6qZ43QxgBxRNH+mWLH55Ge9KFNcE9Pl6YqaYMlKx7CsTsbdR4xnusv4G/8Ak5E+SckM08+1AoYKfUj/AJ649WZkBaQde5PIyT3aTnynjr5Tne7S8+VuP8JwOeL8LLWztK118rHFGfbe9wT0PFn1yfwJPwn7HM8F7qjf0ORU/DYhcU3W6H6jKysscaLJpKDCgfXJoT4aynuAD/UZZqNYpRN0jvfNX0zErsyKIk8y+7qCxvqLAww7MhYaRdh46jMikSQnw1kKiv4s1isQLvHIP/b/AHwAVqi4iptOsYJ6jOnIMnHoP0zJNRFJEynxL7WeM2e/E6VwP0xQMGJb0ZFE3IOn0y921LKTGiRovlt2F9uM87TyqiFGJAJBBXqDmtJp917Xk+bNk0r2jq0mkUu0QT9prWY1wka0Bi1kh3gppWlofxseT3OKGqC/BFGv5X+uA+pmbgua9Bxir+kVRX2Wl9RIAhijhQkdgLzV9oKmnGnKXxRN+pzz43YyLZ7jGwkhJKv4l6LffBxvs0pY/wCJVD7Y1MQSMbQq8XRy9PaEEaALrBd3zGeO/wB88nUzSRsCpNnk7krkf/uTSytK256v5DFwTJcske+vtOIF397VSQo4jPpzk+p9tSxuFhkWRaskrXOQ6S/d25fg9ksYTxCdy7mS+eif89clBInyyZ2o10ute5aG1TVDFpqtsXhbfld4JQRyMo3Vt/iFHJ2+I50i3Ho5T/rs9KLXal4hEHRVCmgTXGafbWqU7fJS9gOMm011/F8J6JeTy/vG+vpWacmZxR6B9tap1KHYA3HTGSe0tVFHtDQlV4pc8pfiH1yzVX4TfFV90AwzZYoTLM0rtK1WctTXamQqu+MUNws1nnD92cohKgjzRDy/xD/nOZZ1i2lofJ7WnFxlY6u+Bm/23qv8P2zzpv3rVXXt0wMi+SXp68XtLVakhS0SheRu4GDqPaeqUAN4R61tHTJNEQHbcUH84vB1RBK0U7/CMCzkYpJjl/lH6jB06B5grCx3F1mByjWPT74XjG/gSv5RkYZb4KIAUUqBy1S8nOMQkSjfrzJknik/+OMD+UYPjkCtif8AyMiFDrlmoJ8Xk3wP0xHjNxSoPoowwxfzMbJ64MGTjOrO7YQXiyQM0IOdjBESCR0HesHZzW4X9DgNM6P94v1GOirZIDt+IdWrvi1UqQ3Yc9Dj/FG1VCdOb2c4MUGyRu3m2Hjj9r0wFiiNjagrizJnNqV5BC89fJhe9r6R/wD88Lfg4r06BQishZD3vxKw0IurWuesp+WKOoHJ45r+DN96UXWzn/Bjb8Kl6DJRlaqrZ2N5M3U5RJOrDqLqvhrAD8ADbYPpmo77My/AtOQKvb0PViMF4bLNvTr03YwmQjlU+2ZuevhT7Zql6FS8FiGqbxE9avHaggxmtnbgMScHz0BS/bOBkI4Cj8hhS9GpeCAPJlEMoQg+KR5a+G/yxW6mN11wvFok0Oe23BilrZpWF2LPMbJ7LgrHCR5pCD/Lm+ObvaPT4c4z2K2gf+uA1H0OB44pTtlKihztvF6lg+2n3de1Zonrmgf/AFzGn3CuPtkVR9FN1/LOHGa1E2CM4fUDEyzSdxokAAZgWzzwM6hfUZvBHxC/XnIDOo4xifCMUQQa7Y1PgGDCXQrsMIAsUHr/AK4Kgk0ASfljPCkIHlYV8sjSPRF0aQdK4yWYAalWNKCO3OCr6kLQBr+XBCTh99En6HKzvycsZRpDQ4IKNP5SK+G80zFVYCXtQGzrgGXUoOaAA7r0wDepbHmXg30xPOE8MLEt49k9RtxCrdKfxY06mYg2ym/lijuJvcLJvIgyQ67SOKNfLGpHHYJgdhXNGucQWaiPLz1IzfElqvFNfXFuwSCmMABVI2VvmcyKRYp2ZlDDkUReLYFjZYEnDRYyzGU/Tae+Z7EtjkhlLMumLgEcUB+WasYEjM2npSaA4rbWJ07qvkjEhJNgAA5QsUsilqmKLx2/PMYv6LZpWq26dSSfRe/TAkm00TbX04s87uMW0wCkt4oJPJoYgnTs/PiVxXIyUPSs7xlOqL7QFvgV0xmpdTtQc/OsnYKJAYyKH4jmySNIQSV4zZ0U6i0V6ONGhs92rri0AE0gtOG/jyYM69Hrm+DhRyFSbCtfrglTsy2mqK0B21+w+RyWVNshNqbBNDtnPLuj2bEHHUdcUOD1GaMj4o9mnaSRLR+AfnjICdi+aPoeDktGq3CvS8astIEMaGu/fBCx/KBQGhIv/l4poRJchljUnmrzvHIAqKP7ZizHn9mnPqMQFEcL9P8APGJ8IxbHoB274afAMGEujEtYHYcGwL++P0algXceIvQAvVHJ1/uz/wAw/wA8YNVQrwY/zGVWJWwBDARIpI48/TBkXfEyqkSt+Ld0xStM7rWlAB4+A1zm6xzBN4JEDlDe5ORhiiJoCTOgvqazFQvJsFde+MSQzaqNiqryBSisSfiP1x+yLPDYCyqUOOuZ4TFxwnHPXOeNBGhCk+vPJwjHFvW1o10vi8j0YT9OKtsLbUofPMSNgQtJZ55whHEHYbQTQ45oHEjTl3enVaNVeQTUo7sa0bKwBVOTXX5ZPNEySc1zzQOEulZrqRbBrrgMhikosG+YORzyb7K4CINOzfCzcXXbKE1nhRbCJRwK4ArJnl3xLxddsIMZAGdha8UTd/I5kZdncGWRWBAbnay1z2ORSoVPT75S0rPLubr6k3iZ23MTxz8qzpHa2cn2GsTBQNq9PXrmvEy0Si9fXARAYb5J+udSmKwvmHzzdOjNo2RGiNsim/Q5ojY15V5FjMKJ5bBHPT5ZjxbnVUIWwTZOTTSJUw2ideqrfHf1zJI2WMsVWsFtLIG2mRbq+uDNDJEoZmHPHXMZM1QMFeJZF0Ca/LKdDv1Oo2PI+2iTRyaD4z/Kf0yvQrqtLP4saISBRDdMyaVXso9o6X3bTeIk0l3RBb/npmaTSmbTPK0zgIoPxdTg6ybWaxdjxxqCbpeMXH73HGY12U1A3/TNxa/2RctN/wAE3iSLPt3kjdVHvhMArso6AkZngS7/ABGHAbk5rj9o/wDMf1zD7MvoWte6N67x+hxS3uFCzfGNA/7Vj/jH6YWkRSxkM6xFCCt82ckJ9Oj6uD2cqHURy6l63eJKFCD0GfM+0JPE1LeSJNvFRfD/AL5Q9NZfWISaHwAk3ks8MccaOkwct1WqI+uJA6b+8R/zDD0sHvGo8OyBySQLwNKL1Mf82dG8kZJjsX3GZd/RFp0gUMx1DbUA4AFg+nXMOjfy3M27dVkcL+eKQauaNwnruK1RPzw4n8Uf9xqfCbkVt+95lZejbNTSikI1LXKaG1bH/wC5q6CNw7+OdqnbuK8X985mQzqDq6UC7C1RrtmhIkTausFDiq4PfKpehsWmgJSMvJtMjUBtvj1zvcoyu9ZvLZFlew6nG/s2NnWm9x5I9epwISgH9621YAK9r/XKpekEdAyBmMtIp5Nc1XX/ACxWmjaVLMoQM20X39cO0Z5IzqzsoANXXvmL4cUgVdRaBeu0HkntlUq7HYtob1JjWQ7VFszCqx39ngqS01LxRK+ozgIEcyjVszEc+XrmKsbpHI+qpxztI6G8Xl6FBDQHd4SzEnbuPHA+XXOXQuxC+NyO1en+/GaTGGLHWG7/AIVGZcQe/fTweDt/rl/fpUY2kZVLPMbAsAC+e/8ApiYNOdRGZGkPBoACzjZNnhhBq9wZqPl7et4SiKNAi6yh22r+uP8AddlQs6GgG8YVZDEDofl65r+zyiszSigT/t/XNlfw13Jqd7EdABQ9MHwtYYg7XRohasmsw8l2yFGNYtQyI26kIJ+dYH7UEE77PocJEeKTdIpUGxdeuErSo4ZJIwR3DDNogCZO4l++Z+0HNSfW8d4s4H72L7jMMs5BBljIPUbhzjZC1MgZb31Y6njDfmR/5j+uaHkIppECXZAIwdwYlulknBg+gImGzYTVMGB6jLFkmkJZGRvUCM5FGAavpzh8pdMw/PJm1FtWVN47h1JBscjwzxnO8qeZmCA+kWTBmJP7RvrfXNILcNIxA9ThbFcbZzyJ4xmLbm7ALQvFRTyRNaGj9MxhW4emO0kKuHZ1G0UATdWfpmqswEfaOp21v59e+HE8e0mZtzydScyXRASE+LHGpPALdMX7vCFJbVLdXQF5KKXRuEsXY55YrJUL5RtUf55zuiQhFKBjwQOb+eQgcN8sqXSgxB+aKE9e+DaRv5vwaWipY7UA9QP9c3fCxVH2cG+Og+WKOlTy14nIvkDB1ECRxbgHBvi6rEfm/BqvEHoleDuYj9M15ImcA7Sq+a/X5ZHHGJJUS63d8thhGnkG4BvUk1kS5X1QPiIkRIK7jz2zhPHGqr8R6ngVZzJNMG8xYKfRebyKqB+RyJ8rT0i4GEkgbfIOL6E4mWpZAzMlA1xhJCgj8wBJ730/rgeAgFkt17VkZfJf0PYx2I7QJ/X75u+Hjft8vND9MQ+nVYy9tQHGT9h88h+b8LWkiUDYAQPMcnGqmUFQ5r0yiOJIEjdgHd+o9BgzRJLC8qAKyt09RhpvYTlkrJXkdzyST9c1IpJCdqk1mAAgduayv3dAWCuVIFDzjk4nInOlnAsxmhzm+6T1fhnKmhhAJ8diAPxdeuLKxhEVnZZGF2D+uFsaJmjeNirqQRhp8IwXR0em9evrhL0xMvoUDxwcZGQCdyCS/n0xOU6XULAD5AxPr/z1yf4aRhZaI8AKb9TgN5ntAFvsDlLapSm3ZVA0Qw6nvmDUIjblXooA8wwt+GqXpKQTfcnHRTTRxeGooXYNcjGjXKCD4YBHcHrmDWhdtKSQbNnqcLl4VR9FeMV6xxH6rmK7M3liRj6BbzjqLnMu1T6A9sKDUmFZNo80nBb0HcDNGBO0gEd/TDEkoAF1a7Rx2yoa6JZJGEF7xt8zdF9BgPrQ2rWYJYQeQE9D6/fKiFmSVeoUduUzGaWVdpQVfZKylPaVIFZCTXJ3d/UZqe1CG3MrGhQG7i7s4kQjcGDDt3w/GYckC/zyl9fE8XhmEqKI8rdibOTy6hW1RmVOOytzWBGCZ2PlXzffF7WC89zjtPqRE7uVtm/IYwa4AqfDsL0BP9cLfhCkldU20D6dcESSji+/cZQNcBtHh8LfQ9c5deFN+HfrZwuXhE7ySFSrOK9KwADxXNemGJqLkqrM3c9s2OYIlVzdnNDFJvYR1E1AGut9M0amWto2/bM94sWRz8s2DUrFHICrFpDywajWRqSS6Ygg1+d49JmAJcE/0/yx49pnfYjAUnzC+1VWZ/aPkZSl7m3Ek9fl9OmJgUZrDfszR4PP+2A0jMyFlHl4sDKR7RAZD4dhRVFupPU/rmD2gNwJQ8DoG4v1wIRJIfC27SBfUjviS/phTTNLQJJA55PfFZUT2XwooiXyjkXjNq/hH2zs7Ejtq/hH2ztq/hH2zs7Ijtq/hH2ztq/hH2zs7Ijtq+g+2dtX8I+2dnZEdtX8I+2dtX8I+2dnZEdtX0H2ztq/hH2zs7Ijtq/hH2dtX8I+2dnZEdtX8I+2dtX8I+2dnZEdtX8I+2dtX8I+2dnZEdtX8I+2dtX8I+2zs7Ijtq+g+2dtX8I+2dnZEdtX8I+2dtX8I+2dnZEdtX8I+2dtX8I+2dnZEdtX8I+2dtX8I+2dnZEdtX8I+2dtX8I+2dnZEdtX8I+2ZtU/wj7Z2dkQjUQJsLqKIyTOzsiP/Z'

type FormState = {
  coachName: string
  teamName: string
  email: string
  phone: string
  division: string
  cityState: string
  notes: string
}

const initialForm: FormState = {
  coachName: '',
  teamName: '',
  email: '',
  phone: '',
  division: '',
  cityState: '',
  notes: '',
}

export default function Tournaments() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const payload = {
      formType: 'Halloween Freaky Football Bowl Pre-Registration',
      event: 'Halloween Freaky Football Bowl',
      eventDate: 'October 31, 2026',
      ...form,
    }

    try {
      const netlifyBody = new URLSearchParams({
        'form-name': 'halloween-freaky-football-pre-register',
        ...form,
      })

      const [netlifyResult, webhookResult] = await Promise.allSettled([
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: netlifyBody.toString(),
        }),
        fetch(siteConfig.integrations.leadWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }),
      ])

      const netlifyOk = netlifyResult.status === 'fulfilled' && netlifyResult.value.ok
      const webhookOk = webhookResult.status === 'fulfilled' && webhookResult.value.ok
      if (!netlifyOk && !webhookOk) throw new Error('Pre-registration submission failed')

      trackEvent('tournament_pre_register', { event: 'Halloween Freaky Football Bowl' })
      setStatus('success')
      setForm(initialForm)
    } catch (error) {
      console.error('[Tournament] pre-registration error:', error)
      setStatus('error')
    }
  }

  return (
    <>
      <PageMeta
        title="Halloween Freaky Football Bowl | Missouri EPIC Tournaments"
        description="Pre-register for the Halloween Freaky Football Bowl on October 31 at Ballparks of America in Branson, Missouri. A one-day Missouri EPIC flag football tournament with costumes, prizes and Halloween fun."
        path="/tournaments"
        ogTitle="Halloween Freaky Football Bowl — Branson, MO"
        ogDescription="One day. One field. One freaky EPIC experience. October 31 at Ballparks of America in Branson. Pre-register your team now."
      />

      <section className="relative overflow-hidden bg-black pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,122,0,.23),transparent_28%),radial-gradient(circle_at_85%_60%,rgba(80,255,0,.10),transparent_32%),linear-gradient(145deg,#050505,#190d04_48%,#050505)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_.82fr] gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-orange-400/40 bg-orange-500/10 px-3 py-1.5 text-xs font-black tracking-[.2em] uppercase text-orange-300 mb-5">
                <Trophy size={15} /> Missouri EPIC Tournaments
              </div>
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-[.84] font-black uppercase text-white text-shadow-xl">
                Halloween
                <span className="block text-orange-400">Freaky Football Bowl</span>
              </h1>
              <p className="mt-6 max-w-2xl text-xl text-gray-300 font-semibold">
                One day. One field. One freaky EPIC experience — flag football, Halloween costumes, prizes, music and more in Branson.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-3 max-w-2xl">
                <div className="border border-white/10 bg-white/5 p-4 flex gap-3">
                  <CalendarDays className="text-orange-400 shrink-0" />
                  <div><div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Date</div><div className="font-black text-white">Friday, October 31</div></div>
                </div>
                <div className="border border-white/10 bg-white/5 p-4 flex gap-3">
                  <MapPin className="text-lime-400 shrink-0" />
                  <div><div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Location</div><div className="font-black text-white">Ballparks of America, Branson</div></div>
                </div>
                <div className="border border-white/10 bg-white/5 p-4 flex gap-3">
                  <Clock3 className="text-brand-gold shrink-0" />
                  <div><div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Format</div><div className="font-black text-white">One-Day Tournament</div></div>
                </div>
                <div className="border border-white/10 bg-white/5 p-4 flex gap-3">
                  <PartyPopper className="text-brand-red shrink-0" />
                  <div><div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Experience</div><div className="font-black text-white">Football + Halloween Fun</div></div>
                </div>
              </div>

              <a href="#pre-register" className="mt-8 inline-flex items-center justify-center bg-orange-500 hover:bg-orange-400 text-black px-7 py-4 font-black uppercase tracking-wider transition-colors">
                Pre-Register Your Team
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -inset-3 bg-gradient-to-br from-orange-500/25 via-transparent to-lime-400/20 blur-2xl" />
              <img
                src={flyerSrc}
                alt="Halloween Freaky Football Bowl tournament flyer"
                className="relative w-full border border-orange-400/30 shadow-2xl shadow-black"
              />
              <p className="mt-3 text-center text-xs text-gray-500">Official Halloween Freaky Football Bowl event graphic</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 py-16 lg:py-20 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="text-orange-400 font-black uppercase tracking-widest text-xs mb-3">Tournament Play</div>
              <h2 className="text-2xl font-black text-white">Pool Play + Bracket</h2>
              <p className="mt-3 text-gray-400">Two pool games followed by a single-elimination bracket, with 25-minute games shown on the event flyer.</p>
            </div>
            <div className="card p-6">
              <div className="text-lime-400 font-black uppercase tracking-widest text-xs mb-3">Halloween</div>
              <h2 className="text-2xl font-black text-white">Team Costume Contest</h2>
              <p className="mt-3 text-gray-400">Bring the energy. Team costumes, Halloween atmosphere, fun prizes and more throughout the event.</p>
            </div>
            <div className="card p-6">
              <div className="text-brand-gold font-black uppercase tracking-widest text-xs mb-3">Team Pricing</div>
              <h2 className="text-2xl font-black text-white">$295 Early Bird</h2>
              <p className="mt-3 text-gray-400">The flyer lists $295 per team before October 2 and $325 per team for regular registration through October 23.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pre-register" className="relative bg-black py-16 lg:py-24 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="text-orange-400 text-xs font-black uppercase tracking-[.22em]">Pre-Registration</div>
            <h2 className="section-title mt-3">Get Your Team on the List</h2>
            <p className="section-subtitle mx-auto mt-4">This is a simple interest form, not payment or final registration. Missouri EPIC will follow up with the official registration link and tournament details.</p>
          </div>

          {status === 'success' ? (
            <div className="max-w-2xl mx-auto border border-green-700/50 bg-green-950/30 p-8 text-center">
              <CheckCircle size={50} className="mx-auto text-green-400 mb-4" />
              <h3 className="text-3xl font-black text-white uppercase">You're on the list!</h3>
              <p className="mt-3 text-gray-300">We received your team information. Missouri EPIC will follow up when official tournament registration is ready.</p>
              <button onClick={() => setStatus('idle')} className="btn-secondary mt-6">Pre-Register Another Team</button>
            </div>
          ) : (
            <div className="border border-gray-800 bg-gray-900 p-6 sm:p-8 lg:p-10 shadow-2xl">
              <form name="halloween-freaky-football-pre-register" data-netlify="true" hidden>
                <input name="coachName" />
                <input name="teamName" />
                <input name="email" />
                <input name="phone" />
                <input name="division" />
                <input name="cityState" />
                <textarea name="notes" />
              </form>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="block text-sm font-bold text-gray-300">Coach / Contact Name <span className="text-brand-red">*</span>
                    <input name="coachName" required value={form.coachName} onChange={handleChange} className="mt-2 w-full rounded border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none focus:border-orange-400" placeholder="Coach name" />
                  </label>
                  <label className="block text-sm font-bold text-gray-300">Team Name <span className="text-brand-red">*</span>
                    <input name="teamName" required value={form.teamName} onChange={handleChange} className="mt-2 w-full rounded border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none focus:border-orange-400" placeholder="Team / organization" />
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="block text-sm font-bold text-gray-300">Email <span className="text-brand-red">*</span>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} className="mt-2 w-full rounded border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none focus:border-orange-400" placeholder="coach@example.com" />
                  </label>
                  <label className="block text-sm font-bold text-gray-300">Phone <span className="text-brand-red">*</span>
                    <input type="tel" name="phone" required value={form.phone} onChange={handleChange} className="mt-2 w-full rounded border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none focus:border-orange-400" placeholder="(417) 555-0100" />
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="block text-sm font-bold text-gray-300">Division / Program <span className="text-brand-red">*</span>
                    <select name="division" required value={form.division} onChange={handleChange} className="mt-2 w-full rounded border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none focus:border-orange-400">
                      <option value="">Select one</option>
                      <option value="5v5 Flag">5v5 Flag</option>
                      <option value="7v7 Boys">7v7 Boys</option>
                      <option value="7v7 Girls Flag">7v7 Girls Flag</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </label>
                  <label className="block text-sm font-bold text-gray-300">City / State
                    <input name="cityState" value={form.cityState} onChange={handleChange} className="mt-2 w-full rounded border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none focus:border-orange-400" placeholder="Springfield, MO" />
                  </label>
                </div>

                <label className="block text-sm font-bold text-gray-300">Age Group / Notes
                  <textarea name="notes" rows={4} value={form.notes} onChange={handleChange} className="mt-2 w-full rounded border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none focus:border-orange-400 resize-none" placeholder="Age group, number of teams, questions, etc." />
                </label>

                {status === 'error' && (
                  <div className="flex items-center gap-2 border border-red-800/50 bg-red-950/40 p-4 text-red-300 text-sm">
                    <AlertCircle size={18} /> We couldn't submit the form. Please try again or contact Missouri EPIC directly.
                  </div>
                )}

                <button type="submit" disabled={status === 'submitting'} className="w-full bg-orange-500 hover:bg-orange-400 disabled:opacity-60 text-black font-black uppercase tracking-wider px-6 py-4 transition-colors">
                  {status === 'submitting' ? 'Sending...' : 'Pre-Register My Team'}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
