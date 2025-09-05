/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package iniciopam;
import javax.swing.JOptionPane;

/**
 *
 * @author May
 */
public class fechasDeParciales {
    public fechasDeParciales(){
        String fechas = 
             "1er Parcial: 29-09-25\n"+
             "2do Parcial: 03-11-25\n"+
             "3er Parcial: 01-12-25\n"+
             "Final: 08-12-25";
         JOptionPane.showMessageDialog(null, fechas, "Fechas de Parciales", JOptionPane.INFORMATION_MESSAGE);
    }
}
