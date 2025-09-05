/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package iniciopam;

import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JLabel;

/**
 *
 * @author May
 */
public class inicioGUI extends JFrame{
   private JButton reglamentoPOO;//BOTÓN PARA REGLAMNETO
   private JButton lineamientosClassroom;//boton para lienemientos
   private JButton fechasDeParciales;//boton para fechas
   private JButton porcentajesPorParcial;//boton para porcentajes
   private JPanel panelBotones;
   
   public inicioGUI(){
       panelBotones = new JPanel();
       reglamentoPOO = new JButton("Reglamento POO");
       lineamientosClassroom = new JButton("Lineamientos de ClassRoom");
       fechasDeParciales = new JButton("Fechas De Parciales");
       porcentajesPorParcial = new JButton("Porcentajes Por Parcial");
      
       panelBotones.add(reglamentoPOO);
       panelBotones.add(lineamientosClassroom);
       panelBotones.add(fechasDeParciales);
       panelBotones.add(porcentajesPorParcial);
       
       add(panelBotones, BorderLayout.CENTER);

   }
}
