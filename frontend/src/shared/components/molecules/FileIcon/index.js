import PropTypes from 'prop-types'
import { compose, setPropTypes } from 'recompose'
import fileExtension from 'file-extension'
import {
  IconFilePdf,
  IconFileWord,
  IconFileExcel,
  IconFilePowerPoint,
  IconFileZip,
  IconOtherFile,
} from 'shared/components/atoms/Icons'

const WIDTH = 22
const HEIGHT = 22

const FileIcon = ({ fileName }) => {
  switch (fileExtension(fileName)) {
    case 'pdf':
      return <IconFilePdf width={WIDTH} height={HEIGHT} />
    case 'doc':
    case 'docx':
      return <IconFileWord width={WIDTH} height={HEIGHT} />
    case 'csv':
    case 'xls':
    case 'xlsx':
      return <IconFileExcel width={WIDTH} height={HEIGHT} />
    case 'ppt':
    case 'pptx':
    case 'pps':
      return <IconFilePowerPoint width={WIDTH} height={HEIGHT} />
    case 'zip':
    case 'rar':
    case 'zar':
    case '7z':
    case 'lzh':
    case 'tar':
    case 'gz':
    case 'tgz':
      return <IconFileZip width={WIDTH} height={HEIGHT} />
    default:
      return <IconOtherFile width={WIDTH} height={HEIGHT} />
  }
}

const Enhanced = compose(setPropTypes({ fileName: PropTypes.string }))(FileIcon)

export default Enhanced
