import { Injectable } from '@angular/core';

@Injectable()
export class ChessService {

  pawnFilePosition: any; pawnRankPosition: any; rookFilePosition: any; rookRankPosition: any;
  knightFilePosition: any; knightRankPosition: any; bishopFilePosition: any; bishopRankPosition: any;
  queenFilePosition: any; queenRankPosition: any; kingFilePosition: any; kingRankPosition: any;
  presentPawnFile: any; presentPawnRank: any;
  whitePawnHints = ''; blackPawnHints = '';

  diagonalHintLeft: any; diagonalHintRight: any; diagonalHintsLeft: any; diagonalHintsRight: any;

  lrArray: any = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  duArray: any = ['1', '2', '3', '4', '5', '6', '7', '8'];
  moveBlackPawnHint(pawnPresentPosition) {

    console.log('pawn location-' + pawnPresentPosition);
    if (pawnPresentPosition.charAt(1) === '7') {
      for (let i = 0; i < this.lrArray.length; i++) {
        console.log('inside for');
        this.blackPawnHints = this.lrArray[i] + '7';
        const sixthRow = '6', fifthRow = '5';
        if (pawnPresentPosition === this.blackPawnHints) {
          if ($('td#' + pawnPresentPosition).hasClass('selectedPiece')) {
            $('td#' + this.lrArray[i] + sixthRow + ', td#' + this.lrArray[i] + fifthRow).addClass('validMoveHint');
            console.log('~blackPawnHints-', pawnPresentPosition + this.blackPawnHints);
          } else {
            $('td').removeClass('validMoveHint');
          }
        }
      }
    } else {
      this.pawnFilePosition = pawnPresentPosition.charAt(0); // a-chess column
      this.pawnRankPosition = pawnPresentPosition.charAt(1); // 8-chess row
      this.presentPawnFile = this.lrArray.indexOf(this.pawnFilePosition);
      this.presentPawnRank = this.duArray.indexOf(this.pawnRankPosition);

      if (0 < this.presentPawnFile && this.presentPawnFile < 8 && 0 < this.presentPawnRank && this.presentPawnRank < 8) {
        const pawnFileLeft = this.presentPawnFile - 1, pawnFileRight = this.presentPawnFile + 1,
          pawnRankLeft = this.presentPawnRank - 1, pawnRankRight = this.presentPawnRank - 1;
        console.log(this.lrArray[pawnFileLeft]);
        console.log(this.duArray[pawnRankLeft]);
        console.log('else block - ' + pawnPresentPosition + ' ' + this.presentPawnFile + ' ' + this.presentPawnRank);
        console.log(this.lrArray[pawnFileRight]);
        console.log(this.duArray[pawnRankRight]);

        /* condition for diagonal left hints for black pawn */
        if ($('span#' + this.lrArray[pawnFileLeft] + this.duArray[pawnRankLeft]).hasClass('whitePiece piecePresent')) {
          console.log('white Pieces present on left - pfl|prl', this.lrArray[pawnFileLeft] + this.duArray[pawnRankLeft]);
          $('td#' + this.lrArray[pawnFileLeft] + this.duArray[pawnRankLeft]).addClass('validMoveHint');
        }
        /* condition for diagonal right hints for black pawn */
        if ($('span#' + this.lrArray[pawnFileRight] + this.duArray[pawnRankRight]).hasClass('whitePiece piecePresent')) {
          console.log('white Pieces present on right - pfr|prr', this.lrArray[pawnFileRight] + this.duArray[pawnRankRight]);
          $('td#' + this.lrArray[pawnFileRight] + this.duArray[pawnRankRight]).addClass('validMoveHint');
        }
        /* condition for straight hints for black pawn */
        if (!$('span#' + this.lrArray[this.presentPawnFile] + this.duArray[pawnRankRight]).hasClass('whitePiece piecePresent')) {
          console.log('can move forward ', this.lrArray[this.presentPawnFile] + this.duArray[pawnRankRight]);
          $('td#' + this.lrArray[this.presentPawnFile] + this.duArray[pawnRankRight]).addClass('validMoveHint');
        }
        if (!$('td#' + pawnPresentPosition).hasClass('selectedPiece')) {
          $('td').removeClass('validMoveHint');
        }
      }
    }

  }
  moveWhitePawnHint(pawnPresentPosition) {
    console.log(pawnPresentPosition);
    console.log('pawn location-' + pawnPresentPosition);
    for (let i = 0; i < this.lrArray.length; i++) {
      console.log('inside for');
      this.whitePawnHints = this.lrArray[i] + '2';
      const thirdRow = '3', fourthRow = '4';
      if (pawnPresentPosition === this.whitePawnHints) {
        if ($('td#' + pawnPresentPosition).hasClass('selectedPiece')) {
          $('td#' + this.lrArray[i] + thirdRow + ', td#' + this.lrArray[i] + fourthRow).addClass('validMoveHint');
          console.log('~whitePawnHints-', pawnPresentPosition + this.whitePawnHints);
        } else {
          $('td').removeClass('validMoveHint');
        }
      }
    }
  }
  moveRookHint(rookPresentPosition) {
    console.log(rookPresentPosition);
    // rookPresentPosition = 'a8';
    this.rookFilePosition = rookPresentPosition.charAt(0); // a-chess column
    this.rookRankPosition = rookPresentPosition.charAt(1); // 8-chess row
    for (let i = 0; i < this.duArray.length; i++) {
      if ($('span#' + this.rookFilePosition + this.duArray[i]).hasClass('piecePresent')) {
        console.log('piecePresent at ' + this.rookFilePosition + this.duArray[i]);
      }
    }


  }


  constructor() { }

}
