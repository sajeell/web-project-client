import { jsPDF } from 'jspdf'
import * as html2canvas from 'html2canvas'
import './Certificate.scss'

export default function Certificate() {
  let input

  window.onload = async () => {
    input = await document.getElementById('certificate')
    await html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({
        orientation: 'vertical',
      })
      const imgProps = pdf.getImageProperties(imgData)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save('download.pdf')
    })
  }

  return (
    <div className='certificate-wrapper' id='certificate'>
      <div style={{ padding: 20, textAlign: 'center' }}>
        <div
          style={{
            width: 750,
            height: 550,
            paddingTop: 20,
            paddingBottom: 180,
            paddingLeft: 100,
            paddingRight: 100,
            textAlign: 'center',
            border: '5px solid #787878',
          }}
        >
          <span style={{ fontSize: 40, fontWeight: 'bold' }}>
            Certificate of Completion
          </span>
          <br />
          <br />
          <span style={{ fontSize: 20 }}>
            <i>This is to certify that</i>
          </span>
          <br />
          <br />
          <span style={{ fontSize: 22 }}>
            <b>Sajeel Ahmad Hassan</b>
          </span>
          <br />
          <br />
          <span style={{ fontSize: 20 }}>
            <i>has completed the exam</i>
          </span>{' '}
          <br />
          <br />
          <span style={{ fontSize: 25 }}>Data Structure & Algorithms</span>{' '}
          <br />
          <br />
          <span style={{ fontSize: 15 }}>
            with score of <b>56%</b>
          </span>{' '}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <span style={{ fontSize: 20 }}>
            <i>dated</i>
          </span>
          <br />
          <span style={{ fontSize: 20 }}>5/3/2021</span>
        </div>
      </div>
    </div>
  )
}
