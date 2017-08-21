import { Component, OnInit } from '@angular/core';
import { ChessService } from './chess.service';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent implements OnInit {

  pawnsPosition: string;

  /* selectedPiece attributes*/
  selectedPieceClass: any;
  selectedPieceId: any;
  selectedPieceTag: any;


  /* savedPiece attributes */
  savedPieceClass: any;
  savedPieceId: any;
  savedPieceTag: any;



  lrArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  duArray = ['1', '2', '3', '4', '5', '6', '7', '8'];
  blackPawns = ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'];
  whitePawns = ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'];
  onTagClick(event) {

    // this.savedPieceClass = '';
    // this.savedPieceId = '';
    // this.savedPieceTag = '';


    this.selectedPieceTag = event.target.tagName;
    this.selectedPieceId = event.target.id;
    this.selectedPieceClass = $('span#' + this.selectedPieceId).attr('class');

    // console.log(this.selectedPieceTag + ' ' + this.selectedPieceId + ' ' + this.selectedPieceClass);
    /* if a chess piece is present in the selected box*/
    if ($('span#' + this.selectedPieceId).attr('class').length > 0) {
      console.log(this.savedPieceId, ' = > ', this.selectedPieceId);
      $('td').removeClass('validMoveHint');
      // $('td#' + this.savedPieceId).removeClass('validMoveHint');

      /* backing up selected id, class tag */
      this.savedPieceId = this.selectedPieceId;
      this.savedPieceTag = this.selectedPieceTag;
      this.savedPieceClass = this.selectedPieceClass;
      // console.log('backing up ' + this.selectedPieceTag + ' ' + this.selectedPieceId + ' ' + this.selectedPieceClass);

      /* toggling selection */
      $('td#' + this.selectedPieceId).toggleClass('selectedPiece');



      /* black pawn selection at row 7 during game for one or two steps playing */
      if ($('span#' + this.selectedPieceId).hasClass('blackPiece piecePresent glyphicon glyphicon-pawn')) {
        /*  console.log('pawn location-' + this.selectedPieceId);
         for (let i = 0; i < this.lrArray.length; i++) {
           console.log('inside for');
           this.pawnsPosition = this.lrArray[i] + '7';
           const sixthRow = '6', fifthRow = '5';
           if (this.selectedPieceId === this.pawnsPosition) {
             if ($('td#' + this.selectedPieceId).hasClass('selectedPiece')) {
               $('td#' + this.lrArray[i] + sixthRow + ', td#' + this.lrArray[i] + fifthRow).addClass('validMoveHint');
               console.log('~pawnsPosition-', this.selectedPieceId + this.pawnsPosition);
             } else {
               $('td').removeClass('validMoveHint');
             }
           }
         } */
        this.chessMove.moveBlackPawnHint(this.selectedPieceId);
      }

      if ($('span#' + this.selectedPieceId).hasClass('whitePiece piecePresent glyphicon glyphicon-pawn')) {
        /* console.log('pawn location-' + this.selectedPieceId);
        for (let i = 0; i < this.lrArray.length; i++) {
          console.log('inside for');
          this.pawnsPosition = this.lrArray[i] + '2';
          const thirdRow = '3', fourthRow = '4';
          if (this.selectedPieceId === this.pawnsPosition) {
            if ($('td#' + this.selectedPieceId).hasClass('selectedPiece')) {
              $('td#' + this.lrArray[i] + thirdRow + ', td#' + this.lrArray[i] + fourthRow).addClass('validMoveHint');
              console.log('~pawnsPosition-', this.selectedPieceId + this.pawnsPosition);
            } else {
              $('td').removeClass('validMoveHint');
            }
          }
        } */
        this.chessMove.moveWhitePawnHint(this.selectedPieceId);
      }

      if ($('span#' + this.selectedPieceId).hasClass('blackPiece glyphicon glyphicon-tower')) {
        console.log('tower location-' + this.selectedPieceId);
      }

      if ($('span#' + this.selectedPieceId).hasClass('blackPiece glyphicon glyphicon-knight')) {
        console.log('knight location-' + this.selectedPieceId);
      }

      if ($('span#' + this.selectedPieceId).hasClass('blackPiece glyphicon glyphicon-bishop')) {
        console.log('bishop location-' + this.selectedPieceId);
      }

      if ($('span#' + this.selectedPieceId).hasClass('blackPiece glyphicon glyphicon-queen')) {
        console.log('queen location-' + this.selectedPieceId);
      }

      if ($('span#' + this.selectedPieceId).hasClass('blackPiece glyphicon glyphicon-king')) {
        console.log('king location-' + this.selectedPieceId);
      }


      console.log(event.target.tagName.toLowerCase()
        + '#' + event.target.id, ' classes= ', $('span#' + this.selectedPieceId).attr('class'));

      // this.selection = $('td#' + this.selectedPieceId);
      /* if previously selected then unselect the piece */
      if ($('td#' + this.savedPieceId).hasClass('selectedPiece')) {
        $('td').not('td#' + this.selectedPieceId).removeClass('selectedPiece');

      }

    } else if ($('span#' + this.selectedPieceId).attr('class').length === 0) {
      $('td').removeClass('validMoveHint');
      console.log('not present');
      console.log('length', $('span#' + this.selectedPieceId).attr('class').length);
      console.log(event.target.tagName.toLowerCase()
        + '#' + event.target.id, ' classes= ', $('span#' + this.selectedPieceId).attr('class'));
      $('td').removeClass('selectedPiece');
      if (this.savedPieceId.length > 0) {
        $('span#' + this.savedPieceId).removeClass(this.savedPieceClass);
        $('span#' + this.selectedPieceId).addClass(this.savedPieceClass);
      }
      this.savedPieceClass = '';
      this.savedPieceId = '';
      this.savedPieceTag = '';
    }
  }

  constructor(private chessMove: ChessService) { }

  ngOnInit() {
  }

}
