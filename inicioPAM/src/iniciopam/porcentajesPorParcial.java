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
public class porcentajesPorParcial {
    public porcentajesPorParcial(){
        String porcentajes =
                "                                                          1P    2P    3P\n"+
                "Evidencia de Conocimiento      40%   40%   20%\n"+
                "Evidencia de Desempeño         20%   20%   10%\n"+
                "Evidencia de Producto          30%   20%   40%\n"+
                "Proyecto Integrador            10%   20%   30%\n";
     JOptionPane.showMessageDialog(null, porcentajes, "Porcentajes por Parcial", JOptionPane.INFORMATION_MESSAGE);
    }
}
